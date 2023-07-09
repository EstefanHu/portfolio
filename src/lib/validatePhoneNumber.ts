export const validatePhoneNumber = (phoneNumber: string) =>
    String(phoneNumber).match(/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/);