using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models.Authentication
{
    public class PassChangeModel
    {
        public string UserName { get; set; }
        public string CurrentPass { get; set; }
        public string NewPass { get; set; }
    }
}
