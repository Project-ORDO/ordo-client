// import  {Link}  from "react-router-dom";
import { useForm } from "react-hook-form";

const AuthForm = ({
  heading,
  onSubmit,
  fields = [],
  submitText = "Submit",
  extraLinks = [],
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="max-w-md mx-auto p-6 border rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">{heading}</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {fields.map((field) => (
          <div key={field.name}>
            <label className="block text-sm font-medium mb-1">
              {field.label}
            </label>
            <input
              type={field.type || "text"}
              {...register(field.name, field.validation)}
              className="w-full p-2 border rounded"
              placeholder={field.placeholder}
            />
            {errors[field.name] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[field.name].message}
              </p>
            )}
          </div>
        ))}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-black text-white rounded"
        >
          {submitText}
        </button>
      </form>

      <div className="mt-4 text-sm text-center space-y-1">

        {/* uncommet this when browser router is availiable */}

        {/* {extraLinks.map((link, index) => (
          <div key={index}>
            {link.label}{" "}
            <Link to={link.to} className="text-blue-600 underline">
              {link.text}
            </Link>
          </div>
        ))} */}

        {extraLinks.map((link, index) => (
  <div key={index}>
    {link.label}{" "}
    <span
      className="text-blue-600 underline cursor-pointer"
      onClick={() => console.log(`Clicked on ${link.text}`)}
    >
      {link.text}
    </span>
  </div>
))}

      </div>
    </div>
  );
};

export default AuthForm;
