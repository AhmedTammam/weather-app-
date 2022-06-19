import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type City = {
  __typename?: 'City';
  coord?: Maybe<Coordinates>;
  country?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  weather?: Maybe<Weather>;
};

export type Clouds = {
  __typename?: 'Clouds';
  all?: Maybe<Scalars['Int']>;
  humidity?: Maybe<Scalars['Int']>;
  visibility?: Maybe<Scalars['Int']>;
};

export type ConfigInput = {
  lang?: InputMaybe<Language>;
  units?: InputMaybe<Unit>;
};

export type Coordinates = {
  __typename?: 'Coordinates';
  lat?: Maybe<Scalars['Float']>;
  lon?: Maybe<Scalars['Float']>;
};

export enum Language {
  Af = 'af',
  Al = 'al',
  Ar = 'ar',
  Az = 'az',
  Bg = 'bg',
  Ca = 'ca',
  Cz = 'cz',
  Da = 'da',
  De = 'de',
  El = 'el',
  En = 'en',
  Es = 'es',
  Eu = 'eu',
  Fa = 'fa',
  Fi = 'fi',
  Fr = 'fr',
  Gl = 'gl',
  He = 'he',
  Hi = 'hi',
  Hr = 'hr',
  Hu = 'hu',
  Id = 'id',
  It = 'it',
  Ja = 'ja',
  Kr = 'kr',
  La = 'la',
  Lt = 'lt',
  Mk = 'mk',
  Nl = 'nl',
  No = 'no',
  Pl = 'pl',
  Pt = 'pt',
  PtBr = 'pt_br',
  Ro = 'ro',
  Ru = 'ru',
  Se = 'se',
  Sk = 'sk',
  Sl = 'sl',
  Sp = 'sp',
  Sr = 'sr',
  Sv = 'sv',
  Th = 'th',
  Tr = 'tr',
  Ua = 'ua',
  Uk = 'uk',
  Vi = 'vi',
  ZhCn = 'zh_cn',
  ZhTw = 'zh_tw',
  Zu = 'zu'
}

export type Query = {
  __typename?: 'Query';
  getCityById?: Maybe<Array<Maybe<City>>>;
  getCityByName?: Maybe<City>;
};


export type QueryGetCityByIdArgs = {
  config?: InputMaybe<ConfigInput>;
  id?: InputMaybe<Array<Scalars['String']>>;
};


export type QueryGetCityByNameArgs = {
  config?: InputMaybe<ConfigInput>;
  country?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};

export type Summary = {
  __typename?: 'Summary';
  description?: Maybe<Scalars['String']>;
  icon?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type Temperature = {
  __typename?: 'Temperature';
  actual?: Maybe<Scalars['Float']>;
  feelsLike?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
};

export enum Unit {
  Imperial = 'imperial',
  Kelvin = 'kelvin',
  Metric = 'metric'
}

export type Weather = {
  __typename?: 'Weather';
  clouds?: Maybe<Clouds>;
  summary?: Maybe<Summary>;
  temperature?: Maybe<Temperature>;
  timestamp?: Maybe<Scalars['Int']>;
  wind?: Maybe<Wind>;
};

export type Wind = {
  __typename?: 'Wind';
  deg?: Maybe<Scalars['Int']>;
  speed?: Maybe<Scalars['Float']>;
};

export type GetCityByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetCityByNameQuery = { __typename?: 'Query', getCityByName?: { __typename?: 'City', id?: string | null, name?: string | null, country?: string | null, weather?: { __typename?: 'Weather', timestamp?: number | null, summary?: { __typename?: 'Summary', title?: string | null } | null, temperature?: { __typename?: 'Temperature', actual?: number | null, feelsLike?: number | null } | null, wind?: { __typename?: 'Wind', speed?: number | null } | null, clouds?: { __typename?: 'Clouds', humidity?: number | null } | null } | null } | null };


export const GetCityByNameDocument = `
    query GetCityByName($name: String!) {
  getCityByName(name: $name, config: {units: metric}) {
    id
    name
    country
    weather {
      summary {
        title
      }
      temperature {
        actual
        feelsLike
      }
      wind {
        speed
      }
      clouds {
        humidity
      }
      timestamp
    }
  }
}
    `;
export const useGetCityByNameQuery = <
      TData = GetCityByNameQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCityByNameQueryVariables,
      options?: UseQueryOptions<GetCityByNameQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCityByNameQuery, TError, TData>(
      ['GetCityByName', variables],
      fetcher<GetCityByNameQuery, GetCityByNameQueryVariables>(client, GetCityByNameDocument, variables, headers),
      options
    );