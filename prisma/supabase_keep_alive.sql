-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor → New Query)
-- Creates the keep_alive table used by the Vercel cron job to prevent
-- the free-plan project from being paused after 7 days of inactivity.

create table if not exists keep_alive (
  id          bigint generated always as identity primary key,
  created_at  timestamptz not null default now(),
  message     text        not null
);

-- Keep the table tidy — delete rows older than 30 days automatically.
-- Requires pg_cron extension (enable in Supabase Dashboard → Database → Extensions).
-- If pg_cron is not available, skip this block; rows will accumulate but cause no issues.
select cron.schedule(
  'delete-old-keep-alive',
  '0 0 1 * *',   -- first day of every month
  $$delete from keep_alive where created_at < now() - interval '30 days'$$
);
