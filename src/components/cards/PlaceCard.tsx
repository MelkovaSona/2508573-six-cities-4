﻿import { Link } from 'react-router-dom';
import { Offer } from '../../entities/Offer';
import { CardBookmarkButton } from './BookmarkButton';
import cn from 'classnames';
import { Nullable } from 'vitest';
import { memo } from 'react';
import { capitalizeFirstLetter } from '../../services/utils';

type PlaceCardProps = {
  offer: Offer;
  cardType: string;
  width: number;
  height: number;
  infoClassName?: string;
  onHover?: (id: Nullable<string>) => void;
};

export function PlaceCard({
  offer,
  cardType,
  width,
  height,
  infoClassName,
  onHover,
}: PlaceCardProps) {
  return (
    <article
      className={cn('place-card', `${cardType}__card`)}
      onMouseOver={() => onHover?.call(null, offer.id)}
      onMouseLeave={() => onHover?.call(null, null)}
      data-testid="place-card"
    >
      {offer.isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div
        className={cn('place-card__image-wrapper', `${cardType}__image-wrapper`)}
      >
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={offer.previewImage}
            width={width}
            height={height}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={cn('place-card__info', infoClassName)}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{offer.price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <CardBookmarkButton offerId={offer.id} isFavorite={offer.isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${(offer.rating * 100) / 5}%` }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name" data-testid="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(offer.type)}</p>
      </div>
    </article>
  );
}

export const MemoPlaceCard = memo(PlaceCard);
