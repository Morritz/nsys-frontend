import ContactInput from "./ContactInput";

export default function ContactForm() {
  return (
    <div className="p-4 h-full flex flex-col">
      <h1 className="text-3xl font-bold pb-2">Formularz kontaktowy</h1>
      <ContactInput placeholder="Imię i nazwisko" />
      <ContactInput placeholder="E-mail" />
      <ContactInput placeholder="Telefon" />
      <ContactInput placeholder="Treść wiadomości" fullSize />
    </div>
  );
}
