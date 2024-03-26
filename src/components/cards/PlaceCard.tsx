﻿import { CardTypes } from '../../Constants';
import { Offer } from '../../entities/Offer';
import { BookmarkButton } from './BookmarkButton';
import cn from 'classnames';

type PlaceCardProps = Offer & {
  cardType: CardTypes;
  onMouseOver?: () => void;
  onMouseLeave?: () => void;
};

export function PlaceCard({
  isPremium,
  isFavorite,
  previewImage,
  price,
  rating,
  title,
  type,
  cardType,
  onMouseOver,
  onMouseLeave,
}: PlaceCardProps) {
  return (
    <article
      className={cn('place-card', {
        'cities__card': cardType === CardTypes.Cities,
        'favorites__card': cardType === CardTypes.Favorites,
      })}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={cn('place-place-card__image-wrapper', {
          'cities__image-wrapper': cardType === CardTypes.Cities,
          'favorites__image-wrapper': cardType === CardTypes.Favorites,
        })}
      >
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width={cardType === CardTypes.Cities ? 260 : 150}
            height={cardType === CardTypes.Cities ? 200 : 110}
            alt="Place image"
          />
        </a>
      </div>
      <div className={cn('place-card__info', {'favorites__card-info': cardType === CardTypes.Cities})}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <BookmarkButton isFavourite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(rating * 100) / 5}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
