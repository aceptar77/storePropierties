using System.Collections.Generic;
using System.Linq;
using propertiesService.Entities;

namespace propertiesService.Service
{
    public class propertyService
    {
        private List<storeProperty> _rstoreProperty;

        public List<storeProperty> liststoreProperty()
        {
            _rstoreProperty = new List<storeProperty>();
            using (propertyContext context = new propertyContext())
            {
                _rstoreProperty = context.storeProperties.ToList();

            }

            return _rstoreProperty;
        }

        public int createProperty(storeProperty itemStoreProperty)
        {
            using (propertyContext context = new propertyContext())
            {
                context.storeProperties.Add(itemStoreProperty);
                context.SaveChanges();
            }

            return 0;
        }
    }
}
