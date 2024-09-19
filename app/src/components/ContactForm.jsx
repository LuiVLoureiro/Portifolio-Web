import emailjs from "@emailjs/browser";
import { useState } from "react";
import { Toaster, toast } from 'react-hot-toast';
import { FiSend } from 'react-icons/fi';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) errors.name = "Name is required";
    if (!formData.email) {
      errors.email = "É necessário preencher o email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email inválido";
    }
    if (!formData.message) errors.message = "Mensagem é necessária";
  
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setIsSending(true);
  
      emailjs
        .send(
          "service_xy6k6xb",
          "template_el3qvmi",
          formData,
          "5TjVcHgXmgKRVZ9H9"
        )
        .then((response) => {
            toast.success('Mensagem Enviada com Sucesso');
            setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
            console.log("FALHOU...", error);
            toast.error("O Envio da mensagem Falhou. Por favor tente novamente mais tarde.")
        })
        .finally(() => {
            setIsSending(false);
        })
    }
  };
  
  return (
    <div className="p-4 lg:w-3/4" id="contact">
      <Toaster />
      <h2 className="my-8 text-center text-4xl font-semibold tracking-tighter"> Mande sua mensagem</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 flex space-x-4">
          <div className="lg:w-1/2">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Nome"
              onChange={handleChange}
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {errors.name && (
              <p className="text-sm text-rose-800">{errors.name}</p>
            )}
          </div>
          <div className="lg:w-1/2">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            />
            {errors.email && (
              <p className="text-sm text-rose-800">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="mb-4">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Mensagem"
            onChange={handleChange}
            className="mb-8 w-full appearance-none rounded-lg border border-stone-50/30 bg-transparent px-3 py-2 text-sm focus:border-stone-400 focus:outline-none"
            rows="6"
          />
          {errors.message && (
            <p className="text-sm text-rose-800">{errors.message}</p>
          )}
        </div>
        <button 
          type="submit" 
          className={`mb-8 w-full rounded border border-stone-50/30 bg-stone-200 px-4 py-2 text-sm font-semibold text-stone-900 hover:bg-stone-300 ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
          disabled={isSending}
        >
          <div className="flex items-center justify-center gap-2">
            {isSending ? "Enviando..." : "Enviar"}
            <FiSend />
          </div>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
