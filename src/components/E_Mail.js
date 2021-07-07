
function E_Mail({row}) {

    return (
        <>
            <h2>E-Mail Event</h2>
            <div><b>AttachmentCount : </b>{row.AttachmentCount}</div>
            <div><b>CC : </b>{row.CC}</div>
        </>
    );
}

export default E_Mail;
