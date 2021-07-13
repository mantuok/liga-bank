import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useMediaQuery} from 'react-responsive';
import {nanoid} from 'nanoid';
import {useSwipeable} from 'react-swipeable';
import classNames from 'classnames';
import ServiceDetails from '../service-details/service-details';
import Dots from '../dots/dots';
import {
  Viewport,
  SwipeEvent
} from '../../const';

export const Services = () => {
  const services = useSelector((state) => state.services);
  const servicesMaxIndex = services.length - 1;
  const initialServiceIndex = 0;
  const [activeService, setActiveService] = useState({
    id: services[0].id,
    elementIndex: 0
  });
  const dotsNumber = services.length;

  const isDesktop = useMediaQuery({query: `(min-width: ${Viewport.Desktop.MIN})`});
  const isTabletOrMobile = useMediaQuery({query: `(max-width: ${Viewport.Tablet.MAX})`});

  const isServiceActive = (serviceId) => serviceId === activeService.id;

  const getActiveServiceItem = () => services.filter((service) => service.id === activeService.id)[0];
  const getActiveServiceIndex = () => services.indexOf(getActiveServiceItem());

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
        service={getActiveServiceItem()}
      />
    )
  }

  const renderDots = () => {
    return (
      <Dots 
        section={`services`}
        activeIndex={getActiveServiceIndex()}
        dotsNumber={dotsNumber}
      />
    ) 
  };

  const decreaseActiveServiceSlide = () => {
    if (activeService.elementIndex > initialServiceIndex) {
      setActiveService({
        ...activeService,
        id: services[activeService.elementIndex - 1].id,
        elementIndex: activeService.elementIndex - 1
      })
    } else if (activeService.elementIndex === initialServiceIndex) {
      setActiveService({
        ...activeService,
        id: services[servicesMaxIndex].id,
        elementIndex: servicesMaxIndex
      })
    }
  };

  const increaseActiveServiceSlide = () => {
    if (activeService.elementIndex < servicesMaxIndex) {
      setActiveService({
        ...activeService,
        id: services[activeService.elementIndex + 1].id,
        elementIndex: activeService.elementIndex + 1
      })
    } else if (activeService.elementIndex === servicesMaxIndex) {
      setActiveService({
        ...activeService,
        id: services[0].id,
        elementIndex: initialServiceIndex
      })
    }
  };

  const swipeHandler = useSwipeable({
    onSwipedLeft: () => handleSwipe(SwipeEvent.SWIPE_TO_LEFT),
    onSwipedRight: () => handleSwipe(SwipeEvent.SWIPE_TO_RIGHT)
  });

  const handleSwipe = (swipeType) => {
    switch (swipeType) {
      case SwipeEvent.SWIPE_TO_LEFT:
        return increaseActiveServiceSlide(swipeType);
      case SwipeEvent.SWIPE_TO_RIGHT:
        return decreaseActiveServiceSlide(swipeType);
    }
  };

  const handleServiceTabClick = (selectedServiceId) => {
    if (selectedServiceId !== activeService.id) {
      setActiveService({
        ...activeService,
        id: selectedServiceId,
        elementIndex: getActiveServiceIndex
      })
    }
  };

  return (
    <section
     className="main__services services"
     {...swipeHandler}
    >
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