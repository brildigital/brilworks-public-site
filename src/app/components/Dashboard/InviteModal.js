"use client";
import React, { useState } from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import FetchDataSpinner from "../Homepage/FetchDataSpinner";

const InviteModal = ({ handleOpen, open, setOpen }) => {
  const [inviteEmail, setInviteEmail] = useState("");
  const [role, setRole] = useState("select");
  const [isLoading, setIsLoading] = useState(false);
  const [resmessage, setResMessage] = useState("");

  const clearMessage = () => {
    setTimeout(() => {
      setResMessage("");
    }, 5000);
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    const formData = {
      email: inviteEmail,
      role: role,
      emailType: "VERIFY",
    };

    try {
      await fetch(`/api/invite-user`, {
        method: "POST",
        body: JSON.stringify(formData),
      }).then((res) => {
        if (res?.ok) {
          setResMessage("Email sent successfully");
          clearMessage();
          setInviteEmail("");
          setRole("");
        }
        setIsLoading(false);
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
    setOpen(false);
  };

  return (
    <Dialog open={open} size="xs" handler={handleOpen}>
      <div className="flex items-center justify-between">
        <DialogHeader className="flex flex-col items-start">
          <h4 className="mb-1 font-bold">Invite user</h4>
        </DialogHeader>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mr-3 h-5 w-5 cursor-pointer"
          onClick={handleOpen}
        >
          <path
            fillRule="evenodd"
            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <DialogBody>
        <form onSubmit={handleSendEmail}>
          <div className="mb-4">
            <label htmlFor="email" className="font-semibold mb-2">
              Email
            </label>
            <br />
            <input
              className="w-full border border-black rounded-lg mt-2 p-2"
              type="email"
              id="email"
              placeholder="john@gmail.com"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="font-semibold mb-2">
              Role
            </label>
            <br />
            <select
              className="w-full items-center border border-black rounded-lg mt-2 p-2"
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="select" disabled>
                Select role
              </option>
              <option value="ADMIN">Admin</option>
              <option value="USER">{`User (Within organization)`}</option>
              <option value="INVITEDUSER">{`Invited User (Outside organization)`}</option>
            </select>
          </div>
          <p className="pl-4 text-base font-medium text-black">{resmessage}</p>
          <div className="flex items-center justify-between gap-3 pt-4">
            {!isLoading && (
              <button
                className="!rounded-[7px] shadow-none hover:shadow-md !text-lg border border-black p-4 font-bold !py-2 !w-full hover:text-black"
                onClick={handleOpen}
              >
                Cancel
              </button>
            )}

            <button
              type="submit"
              className="btn_flex ease-in-out !rounded-[7px] !text-lg text-white font-bold !py-2 !w-full hover:text-black hover:border hover:border-[#00b6cf]"
            >
              {isLoading ? (
                <>
                  <div className="small-spinner">
                    <FetchDataSpinner size={"la-sm"} />
                  </div>{" "}
                  Sending
                </>
              ) : (
                "Send"
              )}
            </button>
          </div>
        </form>
      </DialogBody>
    </Dialog>
  );
};

export default InviteModal;
