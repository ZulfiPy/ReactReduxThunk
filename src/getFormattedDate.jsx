const getFormattedDate = () => {
    const date = new Date();
    const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit" };
    const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

    return formattedDate;
}

export default getFormattedDate;