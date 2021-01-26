using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using propertiesService.Entities;
using propertiesService.Service;
using Microsoft.AspNetCore.Http;

namespace propertiesService.Controllers
{
    [ApiController]
    [Route("api/property")]
    public class propertyController : ControllerBase
    {
        private propertyService _propertyService = new propertyService();

        [HttpGet]
         [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(storeProperty))]
        public ActionResult<IEnumerable<storeProperty>> Getproperties()
        {
            var result = _propertyService.liststoreProperty();
            return result;
        }

      [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(storeProperty))]
        [HttpPost]
        public ActionResult<storeProperty> AddProduct(storeProperty itemProperty)
        {
            _propertyService.createProperty(itemProperty);
            return itemProperty;
        }

    }
}
