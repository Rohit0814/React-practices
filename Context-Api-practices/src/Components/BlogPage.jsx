import style from './blogpage.module.css';

const Blogpage = () => {
    return <>
        <section class="">
  <h1 class="shadow-sm text-center py-3">Write Your blog</h1>
    <div class="flex-box">
      <div class="row">
        <center>
          <input type='text' id="heading" className={`input shadow ${style.heading}`} name="name" placeholder="Your Title here " />
          </center>
      </div><br />
      <div class="row py-2">
        <div class="col d-flex justify-content-center gap-2">
          <button type="button" onclick="f1()" class=" shadow-sm btn btn-outline-secondary" data-toggle="tooltip" data-placement="top" title="Bold Text">Bold</button>
          <button type="button" onclick="f2()" class="shadow-sm btn btn-outline-success" data-toggle="tooltip" data-placement="top" title="Italic Text">Italic</button>
          <button type="button" onclick="f3()" class=" shadow-sm btn btn-outline-primary" data-toggle="tooltip" data-placement="top" title="Left Align"><i class="fas fa-align-left"></i></button>
          <button type="button" onclick="f4()" class="btn shadow-sm btn-outline-secondary" data-toggle="tooltip" data-placement="top" title="Center Align"><i class="fas fa-align-center"></i></button>
          <button type="button" onclick="f5()" class="btn shadow-sm btn-outline-primary" data-toggle="tooltip" data-placement="top" title="Right Align"><i class="fas fa-align-right"></i></button>
          <button type="button" onclick="f6()" class="btn shadow-sm btn-outline-secondary" data-toggle="tooltip" data-placement="top" title="Uppercase Text">Upper Case</button>
          <button type="button" onclick="f7()" class="btn shadow-sm btn-outline-primary" data-toggle="tooltip" data-placement="top" title="Lowercase Text">Lower Case</button>
          <button type="button" onclick="f8()" class="btn shadow-sm btn-outline-primary" data-toggle="tooltip" data-placement="top" title="Capitalize Text">Capitalize</button>
          <button type="button" onclick="f9()" class="btn shadow-sm btn-outline-primary side" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Clear Text</button>
          <button type="button" onclick="f10()" class="btn shadow-sm btn-outline-primary side" data-toggle="tooltip" data-placement="top" title="Download">Publish <i class="fa-solid fa-upload"></i></button>
        </div>
      </div>
    </div>
    <br />
    <div class="row">
      <div class="col-md-3 col-sm-3">
      </div>
      <div class="col-md-6 col-sm-9">
        <div class="flex-box">
          <textarea id="textarea1" class="input shadow p-3" name="name" rows="15" cols="100" placeholder="Your text here "></textarea>
        </div>
      </div>
      <div class="col-md-3">
      </div>
    </div>
  </section>
    </>
}

export default Blogpage;