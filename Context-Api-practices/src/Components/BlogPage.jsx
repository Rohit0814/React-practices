import style from './blogpage.module.css';

const Blogpage = () => {
    return <>
        <div class="container my-3">
    <div class="bg-body-tertiary p-3 rounded">
      <div class="col-sm-8 py-3 mx-auto">
        <input type="text" className={style.heading}  placeholder='Title'/><br />
        <textarea className={style.title}></textarea>
        <p>
          <a class="btn btn-secondary" href="/docs/5.3/components/navbar/#offcanvas" role="button">Publish »</a>
        </p>
    </div>
    </div>
  </div>
    </>
}

export default Blogpage;