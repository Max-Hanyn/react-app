export const requiredField = value => {
    if (value) {
        return undefined;
    }

    return 'Field is required';
}
export const maxLength = (maxLength) => (value) => {
    if (value && value.length > maxLength) {
        return `Max field length ${maxLength} symbols`;
    }

    return undefined;
}