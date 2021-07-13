import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useMediaQuery} from 'react-responsive';
import {nanoid} from 'nanoid';
import classNames from 'classnames';
import ServiceDetails from '../service-details/service-details';
import {Viewport} from '../../const';

export const Services = () => {
  const services = useSelector((state) => state.services);
  const [activeService, setActiveService] = useState({
    id: services[0].id
  })

  const isDesktop = useMediaQuery({query: `(min-width: ${Viewport.Desktop.MIN})`});
  const isTabletOrMobile = useMediaQuery({query: `(max-width: ${Viewport.Tablet.MAX})`});

  const isServiceActive = (serviceId) => serviceId === activeService.id;

  const getActiveService = () => services.filter((service) => service.id === activeService.id)[0];

  const tabHeadingClass = (service) => {
    return classNames(
      `services-tabs__tab services-tabs__tab--${service.name}`,
      {"services-tabs__tab--active": isServiceActive(service.id)}
    );
  };

  const renderTabHeadings = () => {
    let serviceTabsNames = [];
    services.forEach((service) => {
      serviceTabsNames.push(
        <li 
          className={tabHeadingClass(service)}
          onClick={() => handleServiceTabClick(service.id)}
          key={nanoid()}
        >{service.tabName}</li>
      )
    });
    return serviceTabsNames;
  };

  const renderServiceDetails = () => {
    return (
      <ServiceDetails 
        service={getActiveService()}
      />
    )
  }

  const renderDots = () => {
    
  }

  const handleServiceTabClick = (selectedServiceId) => {
    if (selectedServiceId !== activeService.id) {
      setActiveService({
        ...activeService,
        id: selectedServiceId
      })
    }
  };

  return (
    <section className="main__services services">
      <h2 className="services__heading visually-hidden">Услуги банка</h2>
      <ul className="services__tab-headings services-tabs">
        {isDesktop && renderTabHeadings()}
      </ul>
      {renderServiceDetails()}
      {isTabletOrMobile && renderDots()}
    </section>
  )
};

export default Services;