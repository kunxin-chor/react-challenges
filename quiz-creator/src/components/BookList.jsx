export default function BookList() {
    return (<>
    <h2>Books</h2>
    <table className="table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Number of Pages</th>             
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>War & Peace</td>
                <td>Leo Tolstoy</td>
                <td>1200</td>
                <td>
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
    </>)
}