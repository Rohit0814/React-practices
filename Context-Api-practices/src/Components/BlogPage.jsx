import { useContext, useRef } from 'react';
import style from './blogpage.module.css';
import { List } from '../store/ListContext';

const Blogpage = () => {

  const titleRef = useRef("");
  const contentRef = useRef("");
  
  const {addPost} = useContext(List);


  const save =() => {
    const title = titleRef.current.value;
    const content = contentRef.current.value;
    titleRef.current.value = "";
    contentRef.current.value = "";
    addPost({
      title : title,
      content: content
    })
  }

    return <>
        <section className="">
  <h1 className="shadow-sm text-center py-3">Write Your blog</h1>
    <div className="flex-box">
      <div className="row">
        <center>
          <input type='text' id="heading" className={`input shadow ${style.heading}`} name="name" placeholder="Your Title here " ref={titleRef}/>
          </center>
      </div><br />
      <div className="row py-2">
        <div className="col d-flex justify-content-center gap-2">
          <button type="button" className=" shadow-sm btn btn-outline-secondary" data-toggle="tooltip" data-placement="top" title="Bold Text">Bold</button>
          <button type="button" className="shadow-sm btn btn-outline-success" data-toggle="tooltip" data-placement="top" title="Italic Text">Italic</button>
          <button type="button" className=" shadow-sm btn btn-outline-primary" data-toggle="tooltip" data-placement="top" title="Left Align"><i className="fas fa-align-left"></i></button>
          <button type="button" className="btn shadow-sm btn-outline-secondary" data-toggle="tooltip" data-placement="top" title="Center Align"><i className="fas fa-align-center"></i></button>
          <button type="button" className="btn shadow-sm btn-outline-primary" data-toggle="tooltip" data-placement="top" title="Right Align"><i className="fas fa-align-right"></i></button>
          <button type="button" className="btn shadow-sm btn-outline-secondary" data-toggle="tooltip" data-placement="top" title="Uppercase Text">Upper Case</button>
          <button type="button" className="btn shadow-sm btn-outline-primary" data-toggle="tooltip" data-placement="top" title="Lowercase Text">Lower Case</button>
          <button type="button" className="btn shadow-sm btn-outline-primary" data-toggle="tooltip" data-placement="top" title="Capitalize Text">Capitalize</button>
          <button type="button" className="btn shadow-sm btn-outline-primary side" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Clear Text</button>
          <button type="button" onClick={save} className="btn shadow-sm btn-outline-primary side" data-toggle="tooltip" data-placement="top" title="Download">Publish <i className="fa-solid fa-upload"></i></button>
        </div>
      </div>
    </div>
    <br />
    <div className="row">
      <div className="col-md-3 col-sm-3">
      </div>
      <div className="col-md-6 col-sm-9">
        <div className="flex-box">
          <textarea id="textarea1" className="input shadow p-3" name="name" rows="15" cols="100" placeholder="Your text here " ref={contentRef}></textarea>
        </div>
      </div>
      <div className="col-md-3">
      </div>
    </div>
  </section>
    </>
}

export default Blogpage;