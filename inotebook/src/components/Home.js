import React from 'react'

const Home = () => {
  document.body.style.background = "#312839";
  document.body.style.color = "#898585";

  const style = {
    background: "#898585",
    color: "black"
  }
  return (
    <div>
      <h2 className="my-3 text-center"><strong>Add new note</strong></h2>

      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" style={style} />
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" id="tag" style={style} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" rows="5" style={style}></textarea>
        </div>
        <div>
          <div className="btn btn-primary">
            Save
          </div>
          <button type="reset" className="btn btn-primary mx-2">
            Clear
          </button>
        </div>
      </form>

      <h2 className="my-3 text-center"><strong>All notes</strong></h2>
    </div>
  )
}

export default Home