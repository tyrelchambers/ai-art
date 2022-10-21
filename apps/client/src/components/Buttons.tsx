interface Prop {
  variant?: "secondary" | "outline";
  children: string | React.ReactElement;
}

const Button = ({ variant, children, ...props }: Prop) => {
  const sharedClasses = "py-2 px-6 rounded-md text-sm";
  const primaryClasses = "bg-indigo-500 text-white hover:bg-indigo-600";

  return (
    <button
      type="button"
      className={`${sharedClasses} ${primaryClasses}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
