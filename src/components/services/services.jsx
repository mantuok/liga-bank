import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import classNames from 'classnames';


export const Services = () => {
  const services = useSelector((state) => state.services);
  const [activeService, setActiveService] = useState({
    id: services[0].id
  })

  const isServiceActive = (serviceId) => serviceId === activeService.id;

  const tabHeadingClass = (serviceId) => {
    return classNames(`headings__heading`, {"headings__heading--active": isServiceActive(serviceId)});
  }

  const renderTabHeadings = () => {
    let serviceTabsNames = [];
    services.forEach((service) => {
      serviceTabsNames.push(
        <li 
          className={tabHeadingClass(service.id)}
          onClick={() => handleServiceTabClick(service.id)}
        >{service.tabName}</li>
      )
    });
    return serviceTabsNames;
  };

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
      <ul className="services__tab-headings headings">
        {renderTabHeadings()}
      </ul>
      <div className="services__service-details service-details">
        {/* {renderServiceDetails()} */}
      </div>
    </section>
  )
};

export default Services;