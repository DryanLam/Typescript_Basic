import { StringValidator } from './StringValidator';

export const numberRegexp = /^[0-9]+$/;

// Use export at the end for handy
class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

// Export statements are handy to be renamed for consumers
export { ZipCodeValidator};
export { ZipCodeValidator as mainValidator };

