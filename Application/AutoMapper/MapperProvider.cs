using AutoMapper;
using AutoMapper.Configuration;
using backend.Models.Mappings;
using SimpleInjector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BMSIntegrated.AutoMapper
{
    public class MapperProvider
    {
        public MapperProvider(Container container)
        {
            _container = container;
        }

        private readonly Container _container;

        public IMapper GetMapper()
        {
            var mce = new MapperConfigurationExpression();
            mce.ConstructServicesUsing(_container.GetInstance);

            mce.AddMaps(typeof(MappingsProfile).Assembly);

            var mc = new MapperConfiguration(mce);
            mc.AssertConfigurationIsValid();

            IMapper m = new Mapper(mc, t => _container.GetInstance(t));

            return m;
        }
    }
}
