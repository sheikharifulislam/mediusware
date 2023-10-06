const filterContact = ({ data, even }) => {
    const flatData = data?.pages?.flatMap((data) => data.results);
    if (even) {
        return flatData.filter((item) => item.id % 2 === 0);
    }

    console.log(data, even);

    return flatData;
};

export default filterContact;
