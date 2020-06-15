const onclickSubmit = () => {
    const text = document.querySelector('#inputText').value
    const option = document.querySelector('#option').value
    console.log(text, option)
    if( text == 0 || option == 'null') {
        document.querySelector('#alertWarn').innerHTML = 'Text and options are required.';
        document.getElementById('warningAlert').className = 'alert animate__animated animate__zoomIn alert-warning';
        setTimeout(() => {
            document.getElementById('warningAlert').className = 'alert alert-warning d-none';
        }, 3000);
    }
    if (text.length > 0 && option !== null) {
        fetch('http://localhost:7878', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    text: text,
                    option: option,
                })
            }).then(response => response.json())
            .then(res =>{
                document.getElementById('alertSuccess').innerHTML = res.data.message;
                if (res.data.isPalindrome) {
                document.getElementById('warningSuccess').className = 'alert alert-success animate__animated animate__zoomIn ';
                }
                if (!res.data.isPalindrome) {
                    document.getElementById('warningSuccess').className = 'alert alert-danger animate__animated animate__zoomInDown ';
                }
                setTimeout(() => {
                    document.getElementById('warningSuccess').className = 'alert alert-success d-none';
                }, 3000);
                }).catch(error => {
                console.log(error);
            })
    }
}