﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class TokenViewModel
    {
        public string UserName { get; set; }
        public string UserId { get; set; }
        public string AccessToken { get; set; }
    }
}
