class ValidationUtils {
    static isNumber(value) {
        return typeof value === 'number' && !isNaN(value);
    }

    static isString(value) {
        return typeof value === 'string';
    }

    static isUniqueID(id, data) {
        return !data.some(item => item.EmployeeID === id);
    }

    static isValidScore(score) {
        return this.isNumber(score) && score >= 0 && score <= 100;
    }

    static validateEmployee(employee, data, newData = true) {
        const errors = [];

        if (!this.isNumber(employee.EmployeeID)) {
            errors.push('EmployeeID must be a number');
        } else if (!this.isUniqueID(employee.EmployeeID, data) && newData) {
            errors.push('EmployeeID must be unique');
        }

        if (!this.isString(employee.FirstName)) {
            errors.push('FirstName must be a string');
        }

        if (!this.isString(employee.LastName)) {
            errors.push('LastName must be a string');
        }

        if (!this.isString(employee.Designation)) {
            errors.push('Designation must be a string');
        }

        if (!Array.isArray(employee.KnownLanguages)) {
            errors.push('KnownLanguages must be an array');
        } else {
            employee.KnownLanguages.forEach((lang, index) => {
                if (!this.isString(lang.LanguageName)) {
                    errors.push(`LanguageName at index ${index} must be a string`);
                }
                if (!this.isValidScore(lang.ScoreOutOf100)) {
                    errors.push(`ScoreOutOf100 at index ${index} must be a number between 0 and 100`);
                }
            });
        }

        return errors;
    }
}

module.exports = ValidationUtils;