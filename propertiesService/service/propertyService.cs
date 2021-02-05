using System.Collections.Generic;
using System.Linq;
using propertiesService.Entities;

namespace propertiesService.Service
{
    public class propertyService
    {
        private List<storeProperty> _listRstoreProperty;
        private storeProperty _rStoreProperty;
        public List<storeProperty> liststoreProperty()
        {
            _listRstoreProperty = new List<storeProperty>();
            using (propertyContext context = new propertyContext())
            {
                    _listRstoreProperty = context.storeProperties.ToList();

            }

            return _listRstoreProperty;
        }

        public storeProperty storePropertyId(long propertyId)
        {
            _rStoreProperty = new storeProperty();
            using (propertyContext context = new propertyContext())
            {
                _rStoreProperty = context.storeProperties.Where(n => n.propertyId == propertyId).FirstOrDefault();

            }

            return _rStoreProperty;
        }

        public int createProperty(storeProperty itemStoreProperty)
        {
            using (propertyContext context = new propertyContext())
            {
                context.storeProperties.Add(itemStoreProperty);
                context.SaveChanges();
            }

            return 200;
        }

        public int updateProperty(storeProperty itemStoreProperty)
        {
            using (propertyContext context = new propertyContext())
            {
                context.storeProperties.Update(itemStoreProperty);
                context.SaveChanges();
            }

            return 200;
        }

        public int deleteProperty(long propertyId)
        {
            using (propertyContext context = new propertyContext())
            {
                context.storeProperties.Remove(context.storeProperties.Where(n => n.propertyId == propertyId).FirstOrDefault());
                context.SaveChanges();
            }

            return 200;
        }
    }
}
