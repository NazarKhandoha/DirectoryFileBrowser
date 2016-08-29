using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DirectoryFileBrowser.DirectoryFileWork;
using DirectoryFileBrowser.Models;

namespace DirectoryFileBrowser.Controllers
{
    public class ValuesController : ApiController
    {              
        // GET api/values/5
        public HttpResponseMessage Get(string path)
        {
            DirectoryWork get_files = new DirectoryWork();           
            return Request.CreateResponse(HttpStatusCode.OK, get_files.GetDirAndFiles(path)); 
        }

    }
}