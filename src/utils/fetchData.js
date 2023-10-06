const fetchData = async ({ pageParam, type }) => {
    const url =
        type === "all"
            ? "https://contact.mediusware.com/api/contacts"
            : "https://contact.mediusware.com/api/country-contacts/United States/";
    const response = await fetch(`${url}/?page=${pageParam}`);
    return response.json();
};

export default fetchData;
