export default Object.freeze({
    moment: {
        post: {
            email: {
                in: ["body"],
                errorMessage: "email is empty",
                isRequired: true,
                custom: {
                    options: (email: String) => (email.length && email !== "" && typeof email === "string")
                }
            },
            password: {
                in: ["body"],
                errorMessage: "password is empty",
                isLength: {
                    errorMessage: 'Password should be at least 7 chars long',
                    // Multiple options would be expressed as an array
                    options: { min: 7 },
                },
                custom: {
                    options: (password: String) => (password.length && password !== "" && typeof password === "string"),

                }
            },
            name: {
                in: ["body"],
                errorMessage: "name is empty",
                custom: {
                    options: (name: String) => (name.length && name !== "" && typeof name === "string"),
                    errorMessage: "name is bad format",
                }
            },
            city: {
                in: ["body"],
                errorMessage: "city is empty",
                custom: {
                    options: (city: String) => (city.length && city !== "" && typeof name === "string"),
                    errorMessage: "city is bad format",
                }
            }
        },
        put: {
            id: {
                in: ["params"],
                errorMessage: "id is empty",
                isRequired: true,
                custom: {
                    options: (id: String) => (id.length && id !== "" && typeof id === "string")
                }
            },

            email: {
                in: ["body"],
                errorMessage: "email is empty",
                isRequired: true,
                custom: {
                    options: (email: String) => (email.length && email !== "" && typeof email === "string")
                }
            },
            password: {
                in: ["body"],
                errorMessage: "password is empty",
                isLength: {
                    errorMessage: 'Password should be at least 7 chars long',
                    // Multiple options would be expressed as an array
                    options: { min: 7 },
                },
                custom: {
                    options: (password: String) => (password.length && password !== "" && typeof password === "string"),

                }
            },
            name: {
                in: ["body"],
                errorMessage: "name is empty",
                custom: {
                    options: (name: String) => (name.length && name !== "" && typeof name === "string"),
                    errorMessage: "name is bad format",
                }
            },
            city: {
                in: ["body"],
                errorMessage: "city is empty",
                custom: {
                    options: (city: String) => (city.length && city !== "" && typeof name === "string"),
                    errorMessage: "city is bad format",
                }
            }
        },
        getById: {
            id: {
                in: ["params"],
                errorMessage: "id is empty",
                isRequired: true,
                custom: {
                    options: (id: String) => (id.length && id !== "" && typeof id === "string")
                }
            },
        },
        delete: {
            id: {
                in: ["params"],
                errorMessage: "id is empty",
                isRequired: true,
                custom: {
                    options: (id: String) => (id.length && id !== "" && typeof id === "string")
                }
            },
        }
    }
})