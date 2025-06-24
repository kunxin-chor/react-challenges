export default function BookForm() {
    return (<>
        <h2>Add New Book</h2>

        <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" />
        </div>
        <div className="mb-3">
            <label htmlFor="author" className="form-label">Author</label>
            <input type="text" className="form-control" id="author" />
        </div>
        <div className="mb-3">
            <label htmlFor="pages" className="form-label">Number of Pages</label>
            <input type="number" className="form-control" id="pages" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

    </>)
}