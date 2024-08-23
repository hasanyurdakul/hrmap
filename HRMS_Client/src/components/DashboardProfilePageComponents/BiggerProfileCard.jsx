import React from "react";

function BiggerProfileCard({ employeeCardData }) {
  return (
    <div className=" flex flex-col col-span-full row-span-1 sm:col-span-6 xl:col-span-6 bg-white dark:bg-black shadow-sm rounded-xl bg-no-repeat bg-top bg-cardWaveTopLeft">
      <header className="px-5 py-4">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">
          Profilim
        </h2>
      </header>

      <div className="flex flex-col grow justify-center gap-2 ">
        <div className="flex flex-col grow justify-between items-center px-5 py-4 pb-2  ">
          <div className="flex flex-row justify-between items-center gap-1 leading-3 ">
            <div className="flex flex-col max-w-48">
              <h1 className="font-semibold text-3xl h-fit line-clamp-3 text-black dark:text-gray-100">
                {employeeCardData.employeeFirstName}
                {employeeCardData.employeeLastName}
              </h1>
              <h1 className="text-base   h-fit text-black dark:text-gray-100">
                {employeeCardData.departmentName}
              </h1>
              <h1 className="text-sm font-light  h-fit text-black dark:text-gray-100">
                {employeeCardData.jobTitle}
              </h1>
            </div>
            <div className="ml-2 max-h-40 max-w-48">
              {employeeCardData.genderId == 1 ? (
                <img
                  src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?t=st=1724199138~exp=1724202738~hmac=9831a8c07e3a130d6a1eab78638d18993f59871f7e3e266e0beb92c79ff68e89&w=1480"
                  alt="profile_picture"
                  className="rounded-xl mb-4"
                />
              ) : (
                <img
                  src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611768.jpg?t=st=1724199002~exp=1724202602~hmac=a3b394471c72745af2c933e273904a2e6613fb69321356e58f435940d67ffad4&w=1480"
                  alt="profile_picture"
                  className="rounded-xl mb-4"
                />
              )}
            </div>
          </div>
        </div>

        {employeeCardData.managerName != null ? (
          <div className="flex justify-between items-end px-5 py-2  ">
            <h1 className="font-semibold text-xl line-clamp-1 text-gray-800 dark:text-gray-100 mr-2">
              Yöneticim:
            </h1>
            <h1 className="text-base line-clamp-1 text-gray-800 dark:text-gray-100">
              {employeeCardData.managerName}
            </h1>
          </div>
        ) : (
          <div className="flex justify-between items-end px-5 py-2  "></div>
        )}

        <div className="flex justify-between items-end px-5 pb-2 mb-2">
          <h1 className="font-semibold text-xl line-clamp-1 text-gray-800 dark:text-gray-100 mr-2">
            İşe Giriş Tarihim:
          </h1>
          <h1 className="text-base line-clamp-1 text-gray-800 dark:text-gray-100">
            {employeeCardData.hireDate &&
              employeeCardData.hireDate.split("T")[0].replaceAll("-", "/")}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default BiggerProfileCard;