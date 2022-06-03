interface IContactInput {
  placeholder: string;
  fullSize?: boolean;
}
export default function ContactInput({ placeholder, fullSize }: IContactInput) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="p-1 px-2 my-1 outline-none border-2 border-black border-solid rounded-sm"
      style={{
        width: "100%",
        display: "flex",
        flexGrow: fullSize ? 1 : 0,
      }}
    />
  );
}
