import { useField } from 'formik';

export const useCheckoutInput = (name: string) => {
    const [field, meta, helpers] = useField(name);
    return {
        ...field,
        ...meta,
        ...helpers
    };
}