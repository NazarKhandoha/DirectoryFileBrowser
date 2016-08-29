using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DirectoryFileBrowser.Models
{
    public class Result
    {
        public string[] Directories { get; set; }
        public int Less10Mb { get; set; }
        public int Between10Mb_50Mb { get; set; }
        public int More100Mb { get; set; }
        public string ParentDir { get; set; }
        public string Error { get; set; }

    }
}