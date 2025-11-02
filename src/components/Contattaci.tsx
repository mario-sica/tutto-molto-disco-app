import { useState, type FormEvent } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';
import { useToast } from '../contexts/ToastContext';

interface FormData {
    nome: string;
    email: string;
    messaggio: string;
}

interface FormErrors {
    nome?: string;
    email?: string;
    messaggio?: string;
}

export const Contattaci = () => {
    const [formData, setFormData] = useState<FormData>({
        nome: '',
        email: '',
        messaggio: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { showSuccess, showError } = useToast();

    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.nome.trim()) {
            newErrors.nome = 'Il nome è obbligatorio';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'L\'email è obbligatoria';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Inserisci un\'email valida';
        }

        if (!formData.messaggio.trim()) {
            newErrors.messaggio = 'Il messaggio è obbligatorio';
        } else if (formData.messaggio.trim().length < 10) {
            newErrors.messaggio = 'Il messaggio deve contenere almeno 10 caratteri';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            showError('Errore', 'Compila correttamente tutti i campi');
            return;
        }

        setIsSubmitting(true);

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));
            showSuccess('Messaggio Inviato', 'Grazie per averci contattato! Ti risponderemo al più presto.');
            setFormData({
                nome: '',
                email: '',
                messaggio: ''
            });
            setErrors({});
        } catch (error) {
            showError('Errore', 'Si è verificato un errore durante l\'invio. Riprova più tardi.' + error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    return (
        <section id="contattaci" className="py-8 px-3 md:px-6">
            <div className="max-w-4 mx-auto">
                <div className="mt-6 p-5 border-round-lg shadow-2" style={{ background: 'white' }}>

                    <div className="text-center mb-6">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0043af' }}>
                            Contattaci
                        </h2>
                        <p className="text-xl text-600 max-w-3 mx-auto">
                            Hai domande o vuoi organizzare un evento con noi? Non esitare a contattarci!
                        </p>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-column gap-5">
                        <div className="flex flex-column gap-2">
                            <FloatLabel>
                                <InputText
                                    id="nome"
                                    value={formData.nome}
                                    onChange={(e) => handleInputChange('nome', e.target.value)}
                                    invalid={!!errors.nome}
                                    className="w-full"
                                    disabled={isSubmitting}
                                    aria-describedby="nome-error"
                                />
                                <label htmlFor="nome">Nome *</label>
                            </FloatLabel>
                            {errors.nome && (
                                <small id="nome-error" className="text-red-500">
                                    {errors.nome}
                                </small>
                            )}
                        </div>

                        <div className="flex flex-column gap-2">
                            <FloatLabel>
                                <InputText
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    invalid={!!errors.email}
                                    className="w-full"
                                    disabled={isSubmitting}
                                    aria-describedby="email-error"
                                />
                                <label htmlFor="email">Email *</label>
                            </FloatLabel>
                            {errors.email && (
                                <small id="email-error" className="text-red-500">
                                    {errors.email}
                                </small>
                            )}
                        </div>

                        <div className="flex flex-column gap-2">
                            <FloatLabel>
                                <InputTextarea
                                    id="messaggio"
                                    value={formData.messaggio}
                                    onChange={(e) => handleInputChange('messaggio', e.target.value)}
                                    invalid={!!errors.messaggio}
                                    rows={5}
                                    className="w-full"
                                    disabled={isSubmitting}
                                    aria-describedby="messaggio-error"
                                />
                                <label htmlFor="messaggio">Messaggio *</label>
                            </FloatLabel>
                            {errors.messaggio && (
                                <small id="messaggio-error" className="text-red-500">
                                    {errors.messaggio}
                                </small>
                            )}
                        </div>

                        <Button
                            type="submit"
                            label={isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}
                            icon={isSubmitting ? 'pi pi-spin pi-spinner' : 'pi pi-send'}
                            className="w-full"
                            disabled={isSubmitting}
                            style={{ background: '#0043af', border: 'none' }}
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};
