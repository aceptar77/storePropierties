using System.ComponentModel.DataAnnotations;

namespace propertiesService.Entities
{
    public class storeProperty
    {
        [Key]
        public int propertyId { get; set; }
        public string propertyName { get; set; }
        public string propertyLocation { get; set; }
        public string propertyOwner { get; set; }
        public string propertyPrice { get; set; }
    }
}