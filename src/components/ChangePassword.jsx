import { useState } from "react";
import { updatePassword } from "../api/user";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    currentPassword: "",
    password: "",
    confirm: "",
  });

  const isFormValid =
    formData.password !== "" &&
    formData.password === formData.confirm &&
    formData.currentPassword !== "" &&
    formData.currentPassword !== formData.password;

  function submitPassword(e) {
    e.preventDefault();
    console.log(formData);

    updatePassword({
      currentPassword: formData.currentPassword,
      password: formData.password,
    })
      .then((res) => {
        console.log(res);
        navigate("/user/profile");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="bg-[#20876E] text-white p-[15px] md:p-[24px] xl:mx-[80px] rounded-[22px] mx-[28px] mb-[20px] ">
      <h2 className="text-center md:text-lg my-[40px] font-bold">
        CHANGE YOUR PASSWORD
      </h2>

      <form
        action=""
        onSubmit={submitPassword}
        className="flex flex-col gap-y-5 items-center my-[20px] justify-center w-full mx-auto"
      >
        <div className="flex flex-col md:flex-row md:items-center gap-y-[10px]">
          <label className="w-[150px]" htmlFor="cur-pass">
            Current Password:
          </label>
          <input
            className="rounded-lg p-[8px] text-[#083556] focus:outline-none focus:ring focus:ring-white"
            type="password"
            name=""
            id="cur-pass"
            value={formData.currentPassword}
            onChange={(e) =>
              setFormData({
                currentPassword: e.target.value,
                password: formData.password,
                confirm: formData.confirm,
              })
            }
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-y-[10px]">
          <label className="w-[150px]" htmlFor="pass">
            New Password:
          </label>
          <input
            className="rounded-lg p-[8px] text-[#083556] focus:outline-none focus:ring focus:ring-white"
            type="password"
            name=""
            id="pass"
            value={formData.password}
            onChange={(e) =>
              setFormData({
                currentPassword: formData.currentPassword,
                password: e.target.value,
                confirm: formData.confirm,
              })
            }
          />
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-y-[10px]">
          <label className="w-[150px]" htmlFor="confirm">
            Confirm password:
          </label>
          <input
            className="rounded-lg p-[8px] text-[#083556] focus:outline-none focus:ring focus:ring-white"
            type="password"
            name=""
            id="confirm"
            value={formData.confirm}
            onChange={(e) =>
              setFormData({
                currentPassword: formData.currentPassword,
                password: formData.password,
                confirm: e.target.value,
              })
            }
          />
        </div>

        <button
          className="bg-[#fff] text-[#20876E] md:text-[18px] py-[6px] px-[16px] my-[40px] cursor-pointer rounded-[4px] disabled:opacity-75 disabled:cursor-default"
          disabled={!isFormValid}
        >
          SAVE PASSWORD
        </button>
      </form>
    </div>
  );
}

export default ChangePassword;
