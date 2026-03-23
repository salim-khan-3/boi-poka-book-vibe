const getData = () =>{
    const getStoredData = localStorage.getItem("readList");

    if(getStoredData) {
        const getStoredBookData = JSON.parse(getStoredData);
        return getStoredBookData
    }else{
        return [];
    }
}


const addToDB = (id) =>{
    const bookInfo = getData();

    if(bookInfo.includes(id)){
        alert('vai ei id already exist')
    }else{
        bookInfo.push(id);
        const data = JSON.stringify(bookInfo);
        localStorage.setItem('readList',data)
    }
}

export { addToDB, getData }