interface ProfileProps {
  role: "Watchmaker" | "Timekeeper" | "User";
  name: string;
}

const Profile = ({ role, name }: ProfileProps) => {
  const getColorByRole = (role: string) => {
    switch (role) {
      case "Watchmaker":
        return "text-blue-300";
      case "Timekeeper":
        return "text-amber-400";
      case "User":
        return "text-teal-300";
      default:
        return "";
    }
  };
  return (
    <div className="inline-flex items-center justify-start gap-4">
      <div className={`${getColorByRole(role)}  font-inter text-sm font-bold `}>
        {role}
      </div>
      <div className="font-inter text-sm font-normal capitalize leading-none text-slate-300">
        {name}
      </div>
    </div>
  );
};

export default Profile;
