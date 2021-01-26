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
    [Route("api/[controller]")]
    public class propertyController : ControllerBase
    {
        private propertyService _propertyService = new propertyService();

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(IEnumerable<storeProperty>))]
        public ActionResult<IEnumerable<storeProperty>> Getproperties()
        {
            return _propertyService.liststoreProperty();
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(storeProperty))]
        public ActionResult<storeProperty> GetpropertyId(long propertyId)
        {
            return  _propertyService.storePropertyId(propertyId);
        }

        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(storeProperty))]
        [HttpPost]
        public ActionResult<storeProperty> PostAddPropierty(storeProperty itemProperty)
        {
            _propertyService.createProperty(itemProperty);
            return itemProperty;
        }

        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(storeProperty))]
        [HttpPost]
        public ActionResult<storeProperty> PostUpdatePropierty(storeProperty itemProperty)
        {
            _propertyService.updateProperty(itemProperty);
            return itemProperty;
        }

        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(long))]
        [HttpPost]
        public ActionResult<long> PostDeletePropierty(long propertyId)
        {
           return _propertyService.deleteProperty(propertyId);
          }
    }
}
