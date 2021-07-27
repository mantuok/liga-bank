import React from 'react';
import {useSelector} from 'react-redux'
import {YMaps, Map, Placemark, ZoomControl} from 'react-yandex-maps';
import {useMediaQuery} from 'react-responsive';
import {nanoid} from 'nanoid'
import {
  IconSize,
  Viewport,
  MapParameters
} from '../../const';


const Branches = () => {
  const branches = useSelector((state) => state.branches);

  const isMobile = useMediaQuery({query: `(max-width: ${Viewport.Mobile.MAX})`});
  const isTablet = useMediaQuery({minWidth: Viewport.Tablet.MIN, maxWidth: Viewport.Tablet.MAX});
  const isDesktop = useMediaQuery({query: `(min-width: ${Viewport.Desktop.MIN})`});


  const renderPlacemarks = (iconSize) => {
    return branches.map((branch) => {
      return <Placemark
        key={nanoid()}
        geometry={branch.geo}
        options={{iconLayout: 'default#image', iconImageHref: `${branch[iconSize]}` }}
    />
    })
  };

  const renderMap = (viewport) => {
    return <Map 
      defaultState={{ center: MapParameters[viewport].CENTER, zoom: MapParameters[viewport].ZOOM}}
      width={MapParameters[viewport].WIDTH}
      height={MapParameters[viewport].HEIGHT}
      >
        {isDesktop && renderPlacemarks(IconSize.BIG)}
        {isTablet && renderPlacemarks(IconSize.BIG)}
        {isMobile && renderPlacemarks(IconSize.SMALL)}
        <ZoomControl />
      </Map>
  }

  return (
    <section className="main__branches branches" id="branches">
      <h2 className="branches__heading">Отделения Лига Банка</h2>
      <YMaps>
        <div className="branches__map-wrapper">
          {isDesktop && renderMap(Viewport.Desktop.NAME)}
          {isTablet && renderMap(Viewport.Tablet.NAME)}
          {isMobile && renderMap(Viewport.Mobile.NAME)}
        </div>
      </YMaps>
    </section>
  )
}

export default Branches;