import { useState } from "react";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    required: true,
  });
  const [isLoading, setIsLoading] = useState(true);

  const usernamePatterns = "/^[a-z0-9_-]{3,16}$/";
  const passwordPatterns = "/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/";

  const inputs = [
    {
      id: 1,
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      pattern: usernamePatterns,
      errorMessage: "Username is required",
      required: true,
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      errorMessage: "Email is required",
      required: true,
    },
    {
      id: 3,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      pattern: passwordPatterns,
      errorMessage: "Password is required",
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Enter your password",
      pattern: values.password,
      errorMessage: "Password is required",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(false);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-semibold mb-4">Register</h1>
        {inputs.map((input) => (
          <div key={input.id} className="mb-4">
            <label
              htmlFor={input.name}
              className="block text-sm font-medium text-gray-700"
            >
              {input.label}
            </label>
            <input
              {...input}
              value={values[input.name]}
              onChange={onChange}
              className={`mt-1 p-2 border ${
                input.required && !values[input.name]
                  ? "border-red-500"
                  : "border-gray-300"
              } 
                  rounded-md focus:ring focus:ring-indigo-200 focus:border-indigo-300 
                  focus:outline-none block w-full transition ease-in-out duration-150`}
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 transition ease-in-out duration-150"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default App;
