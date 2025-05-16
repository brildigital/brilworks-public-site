import { CheckCircle, X } from "lucide-react";
import { useMediaQuery } from "react-responsive";

const ReactNativeHiringTable = () => {
  const features = [
    {
      id: "time",
      name: "Time-to-Productivity",
      traditional: "3-6 months",
      dedicated: "72 hours",
    },
    {
      id: "cost",
      name: "Cost Efficiency",
      traditional: "30-40% overhead",
      dedicated: "Flexible monthly billing",
    },
    {
      id: "risk",
      name: "Risk Mitigation",
      traditional: "High attrition risk",
      dedicated: "98% retention guarantee",
    },
    {
      id: "compliance",
      name: "Compliance",
      traditional: "Manual oversight",
      dedicated: "Built-in GDPR/ISO processes",
    },
  ];
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div className="container max-w-[1280px] main-section-padding mx-auto !py-0">
      {isMobile ? (
        <div className="md:hidden flex flex-col gap-4 mt-6">
          {features.map((feature) => (
            <table
              key={feature.id}
              className="w-full border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <tbody>
                <tr className="bg-gray-100">
                  <th className="text-left text-sm font-semibold text-gray-700 p-3 w-1/3">
                    Feature
                  </th>
                  <td className="text-sm text-gray-800 font-medium p-3">
                    {feature.name}
                  </td>
                </tr>
                <tr className="hover:bg-red-100 transition-colors duration-200">
                  <th className="text-left text-sm font-semibold text-gray-700 p-3">
                    Traditional
                  </th>
                  <td className="text-sm text-gray-700 p-3 flex items-start">
                    <X className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature.traditional}</span>
                  </td>
                </tr>
                <tr className="bg-themeColor/5 hover:bg-green-100 transition-colors duration-200">
                  <th className="text-left text-sm font-semibold  p-3">
                    Dedicated
                  </th>
                  <td className="text-sm font-medium p-3 flex items-start">
                    <CheckCircle className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                    <span>{feature.dedicated}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          ))}
        </div>
      ) : (
        <div className="hidden md:block overflow-x-auto rounded-xl border ">
          <table className="w-full border-collapse ">
            <thead>
              <tr>
                <th className="text-left p-4 border bg-gray-100 border-gray-200 w-1/3">
                  Features
                </th>
                <th className="text-left p-4 border bg-gray-100 border-gray-200 w-1/3">
                  Traditional Hiring
                </th>
                <th className="text-left p-4 border bg-gray-100 border-gray-200 w-1/3 bg-themeColor/5">
                  Our Dedicated Teams
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature) => (
                <tr key={feature.id}>
                  <td className="p-4 font-medium text-gray-800 border border-gray-200">
                    {feature.name}
                  </td>
                  <td className="p-4 text-gray-600 border border-gray-200 hover:bg-red-100 transition-colors duration-200">
                    <div className="flex items-start">
                      <X className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{feature.traditional}</span>
                    </div>
                  </td>
                  <td className="p-4 border border-gray-200 bg-themeColor/5 hover:bg-green-100 transition-colors duration-200">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0 text-green-500" />
                      <span className="font-medium">{feature.dedicated}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ReactNativeHiringTable;
