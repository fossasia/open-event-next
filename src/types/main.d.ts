interface ServerData {
  type: string
  attributes: any
}

interface EventAttrs {
  name: string
  startsAt: Date
  endsAt: Date
  timezone: string
  locationName?: string
  logoUrl?: string
  latitude?: number
  longitude?: number
  description?: string
  searchableLocationName?: string
  ownerName?: string
  ownerDescription?: string
  description?: string
  isMapShown?: boolean
  isSessionsSpeakersEnabled?: boolean
  privacy?: string
  state?: string
  eventTypeId?: number
  eventTopicId?: number
  subTopic?: string
  ticketUrl?: string
  codeOfConduct?: string
  thumbnailImageUrl?: string
  largeImageUrl?: string
  originalImageUrl?: string
  iconImageUrl?: string
  scheduledPublishedOn?: Date
  deletedAt?: Date
  paymentCountry?: string
  paymentCurrency?: string
  paypalEmail?: string
  taxAllow?: boolean
  canPayByPaypal?: boolean
  canPayByStripe?: boolean
  canPayByOmise?: boolean
  canPayByCheque?: boolean
  canPayOnsite?: boolean
  chequeDetails?: string
  bankDetails?: string
  onsiteDetails?: string
  isSponsorsEnabled?: boolean
  identifier?: string
  externalEventUrl?: string
  hasOwnerInfo?: boolean
  refundPolicy?: string
  isStripeLinked?: boolean
  online?: boolean
}

interface GroupAttrs {
  name: string
  socialLinks?: object[]
  deletedAt?: Date
  thumbnailImageUrl?: string
  createdAt?: Date
  bannerUrl?: string
  about?: string
  followerCount?: number
  isPromoted?: boolean
  logoUrl?: string
}
