/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 mins 50.52 secs after the 23rd hour of Apr 12th 1985 in UTC.
   */
  DateTime: { input: any; output: any; }
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: { input: any; output: any; }
};

export type AddCommentInput = {
  associatedStatus?: InputMaybe<ProblemStatus>;
  created_at: Scalars['DateTime']['input'];
  creator: UserRef;
  parentComment?: InputMaybe<CommentRef>;
  parentProblem?: InputMaybe<ProblemRef>;
  replies?: InputMaybe<Array<InputMaybe<CommentRef>>>;
  text: Scalars['String']['input'];
  userTags?: InputMaybe<Array<InputMaybe<UserRef>>>;
};

export type AddCommentPayload = {
  __typename?: 'AddCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type AddCommentPayloadCommentArgs = {
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CommentOrder>;
};

export type AddOrganizationInput = {
  admins: Array<UserRef>;
  contributors?: InputMaybe<Array<InputMaybe<UserRef>>>;
  createdBy: UserRef;
  githubOrg?: InputMaybe<Scalars['String']['input']>;
  maintainers?: InputMaybe<Array<InputMaybe<UserRef>>>;
  name: Scalars['String']['input'];
  problems?: InputMaybe<Array<InputMaybe<ProblemRef>>>;
};

export type AddOrganizationPayload = {
  __typename?: 'AddOrganizationPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  organization?: Maybe<Array<Maybe<Organization>>>;
};


export type AddOrganizationPayloadOrganizationArgs = {
  filter?: InputMaybe<OrganizationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrganizationOrder>;
};

export type AddPaymentAddressInput = {
  address: Scalars['String']['input'];
  network: Scalars['String']['input'];
};

export type AddPaymentAddressPayload = {
  __typename?: 'AddPaymentAddressPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  paymentAddress?: Maybe<Array<Maybe<PaymentAddress>>>;
};


export type AddPaymentAddressPayloadPaymentAddressArgs = {
  filter?: InputMaybe<PaymentAddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PaymentAddressOrder>;
};

export type AddProblemInput = {
  causedBy?: InputMaybe<SolutionRef>;
  children?: InputMaybe<Array<InputMaybe<ProblemRef>>>;
  claimedAt?: InputMaybe<Scalars['DateTime']['input']>;
  claimedBy?: InputMaybe<UserRef>;
  comments?: InputMaybe<Array<InputMaybe<CommentRef>>>;
  created_at: Scalars['DateTime']['input'];
  creator: UserRef;
  detailedDescription?: InputMaybe<Scalars['String']['input']>;
  maintainers?: InputMaybe<Array<InputMaybe<UserRef>>>;
  orgs?: InputMaybe<Array<InputMaybe<OrganizationRef>>>;
  parents?: InputMaybe<Array<InputMaybe<ProblemRef>>>;
  repository?: InputMaybe<Array<InputMaybe<RepositoryRef>>>;
  requiredSkills?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  solutions?: InputMaybe<Array<InputMaybe<SolutionRef>>>;
  status: ProblemStatus;
  title: Scalars['String']['input'];
  updated_at: Scalars['DateTime']['input'];
};

export type AddProblemPayload = {
  __typename?: 'AddProblemPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  problem?: Maybe<Array<Maybe<Problem>>>;
};


export type AddProblemPayloadProblemArgs = {
  filter?: InputMaybe<ProblemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ProblemOrder>;
};

export type AddRepositoryInput = {
  git?: InputMaybe<Scalars['String']['input']>;
  http: Scalars['String']['input'];
};

export type AddRepositoryPayload = {
  __typename?: 'AddRepositoryPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  repository?: Maybe<Array<Maybe<Repository>>>;
};


export type AddRepositoryPayloadRepositoryArgs = {
  filter?: InputMaybe<RepositoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<RepositoryOrder>;
};

export type AddSolutionInput = {
  costUSD: Scalars['Int']['input'];
  created_at: Scalars['DateTime']['input'];
  creator: UserRef;
  description?: InputMaybe<Scalars['String']['input']>;
  introducedProblems?: InputMaybe<Array<InputMaybe<ProblemRef>>>;
  problem: ProblemRef;
  updated_at: Scalars['DateTime']['input'];
  url: Scalars['String']['input'];
};

export type AddSolutionPayload = {
  __typename?: 'AddSolutionPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  solution?: Maybe<Array<Maybe<Solution>>>;
};


export type AddSolutionPayloadSolutionArgs = {
  filter?: InputMaybe<SolutionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SolutionOrder>;
};

export type AddUserInput = {
  actionHistory?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  administeredOrgs?: InputMaybe<Array<InputMaybe<OrganizationRef>>>;
  authoredProblems?: InputMaybe<Array<InputMaybe<ProblemRef>>>;
  claimed?: InputMaybe<Array<InputMaybe<ProblemRef>>>;
  comments?: InputMaybe<Array<InputMaybe<CommentRef>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  github: Scalars['String']['input'];
  maintainedOrgs?: InputMaybe<Array<InputMaybe<OrganizationRef>>>;
  name: Scalars['String']['input'];
  paymentAddresses?: InputMaybe<Array<InputMaybe<PaymentAddressRef>>>;
  rate?: InputMaybe<Scalars['Int']['input']>;
  sponsoredBy?: InputMaybe<UserRef>;
  telegram?: InputMaybe<Scalars['String']['input']>;
};

export type AddUserPayload = {
  __typename?: 'AddUserPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Array<Maybe<User>>>;
};


export type AddUserPayloadUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UserOrder>;
};

export type AuthRule = {
  and?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  not?: InputMaybe<AuthRule>;
  or?: InputMaybe<Array<InputMaybe<AuthRule>>>;
  rule?: InputMaybe<Scalars['String']['input']>;
};

export type Comment = {
  __typename?: 'Comment';
  OID: Scalars['ID']['output'];
  associatedStatus?: Maybe<ProblemStatus>;
  created_at: Scalars['DateTime']['output'];
  creator: User;
  parentComment?: Maybe<Comment>;
  parentProblem?: Maybe<Problem>;
  replies?: Maybe<Array<Maybe<Comment>>>;
  repliesAggregate?: Maybe<CommentAggregateResult>;
  text: Scalars['String']['output'];
  userTags?: Maybe<Array<Maybe<User>>>;
  userTagsAggregate?: Maybe<UserAggregateResult>;
};


export type CommentCreatorArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type CommentParentCommentArgs = {
  filter?: InputMaybe<CommentFilter>;
};


export type CommentParentProblemArgs = {
  filter?: InputMaybe<ProblemFilter>;
};


export type CommentRepliesArgs = {
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CommentOrder>;
};


export type CommentRepliesAggregateArgs = {
  filter?: InputMaybe<CommentFilter>;
};


export type CommentUserTagsArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UserOrder>;
};


export type CommentUserTagsAggregateArgs = {
  filter?: InputMaybe<UserFilter>;
};

export type CommentAggregateResult = {
  __typename?: 'CommentAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  created_atMax?: Maybe<Scalars['DateTime']['output']>;
  created_atMin?: Maybe<Scalars['DateTime']['output']>;
  textMax?: Maybe<Scalars['String']['output']>;
  textMin?: Maybe<Scalars['String']['output']>;
};

export type CommentFilter = {
  OID?: InputMaybe<Array<Scalars['ID']['input']>>;
  and?: InputMaybe<Array<InputMaybe<CommentFilter>>>;
  created_at?: InputMaybe<DateTimeFilter>;
  has?: InputMaybe<Array<InputMaybe<CommentHasFilter>>>;
  not?: InputMaybe<CommentFilter>;
  or?: InputMaybe<Array<InputMaybe<CommentFilter>>>;
  text?: InputMaybe<StringFullTextFilter>;
};

export enum CommentHasFilter {
  AssociatedStatus = 'associatedStatus',
  CreatedAt = 'created_at',
  Creator = 'creator',
  ParentComment = 'parentComment',
  ParentProblem = 'parentProblem',
  Replies = 'replies',
  Text = 'text',
  UserTags = 'userTags'
}

export type CommentOrder = {
  asc?: InputMaybe<CommentOrderable>;
  desc?: InputMaybe<CommentOrderable>;
  then?: InputMaybe<CommentOrder>;
};

export enum CommentOrderable {
  CreatedAt = 'created_at',
  Text = 'text'
}

export type CommentPatch = {
  associatedStatus?: InputMaybe<ProblemStatus>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  creator?: InputMaybe<UserRef>;
  parentComment?: InputMaybe<CommentRef>;
  parentProblem?: InputMaybe<ProblemRef>;
  replies?: InputMaybe<Array<InputMaybe<CommentRef>>>;
  text?: InputMaybe<Scalars['String']['input']>;
  userTags?: InputMaybe<Array<InputMaybe<UserRef>>>;
};

export type CommentRef = {
  OID?: InputMaybe<Scalars['ID']['input']>;
  associatedStatus?: InputMaybe<ProblemStatus>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  creator?: InputMaybe<UserRef>;
  parentComment?: InputMaybe<CommentRef>;
  parentProblem?: InputMaybe<ProblemRef>;
  replies?: InputMaybe<Array<InputMaybe<CommentRef>>>;
  text?: InputMaybe<Scalars['String']['input']>;
  userTags?: InputMaybe<Array<InputMaybe<UserRef>>>;
};

export type ContainsFilter = {
  point?: InputMaybe<PointRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export type CustomHttp = {
  body?: InputMaybe<Scalars['String']['input']>;
  forwardHeaders?: InputMaybe<Array<Scalars['String']['input']>>;
  graphql?: InputMaybe<Scalars['String']['input']>;
  introspectionHeaders?: InputMaybe<Array<Scalars['String']['input']>>;
  method: HttpMethod;
  mode?: InputMaybe<Mode>;
  secretHeaders?: InputMaybe<Array<Scalars['String']['input']>>;
  skipIntrospection?: InputMaybe<Scalars['Boolean']['input']>;
  url: Scalars['String']['input'];
};

export type DateTimeFilter = {
  between?: InputMaybe<DateTimeRange>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  ge?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  le?: InputMaybe<Scalars['DateTime']['input']>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DateTimeRange = {
  max: Scalars['DateTime']['input'];
  min: Scalars['DateTime']['input'];
};

export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type DeleteCommentPayloadCommentArgs = {
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CommentOrder>;
};

export type DeleteOrganizationPayload = {
  __typename?: 'DeleteOrganizationPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  organization?: Maybe<Array<Maybe<Organization>>>;
};


export type DeleteOrganizationPayloadOrganizationArgs = {
  filter?: InputMaybe<OrganizationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrganizationOrder>;
};

export type DeletePaymentAddressPayload = {
  __typename?: 'DeletePaymentAddressPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  paymentAddress?: Maybe<Array<Maybe<PaymentAddress>>>;
};


export type DeletePaymentAddressPayloadPaymentAddressArgs = {
  filter?: InputMaybe<PaymentAddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PaymentAddressOrder>;
};

export type DeleteProblemPayload = {
  __typename?: 'DeleteProblemPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  problem?: Maybe<Array<Maybe<Problem>>>;
};


export type DeleteProblemPayloadProblemArgs = {
  filter?: InputMaybe<ProblemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ProblemOrder>;
};

export type DeleteRepositoryPayload = {
  __typename?: 'DeleteRepositoryPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  repository?: Maybe<Array<Maybe<Repository>>>;
};


export type DeleteRepositoryPayloadRepositoryArgs = {
  filter?: InputMaybe<RepositoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<RepositoryOrder>;
};

export type DeleteSolutionPayload = {
  __typename?: 'DeleteSolutionPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  solution?: Maybe<Array<Maybe<Solution>>>;
};


export type DeleteSolutionPayloadSolutionArgs = {
  filter?: InputMaybe<SolutionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SolutionOrder>;
};

export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload';
  msg?: Maybe<Scalars['String']['output']>;
  numUids?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Array<Maybe<User>>>;
};


export type DeleteUserPayloadUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UserOrder>;
};

export type DgraphDefault = {
  value?: InputMaybe<Scalars['String']['input']>;
};

export enum DgraphIndex {
  Bool = 'bool',
  Day = 'day',
  Exact = 'exact',
  Float = 'float',
  Fulltext = 'fulltext',
  Geo = 'geo',
  Hash = 'hash',
  Hnsw = 'hnsw',
  Hour = 'hour',
  Int = 'int',
  Int64 = 'int64',
  Month = 'month',
  Regexp = 'regexp',
  Term = 'term',
  Trigram = 'trigram',
  Year = 'year'
}

export type FloatFilter = {
  between?: InputMaybe<FloatRange>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
};

export type FloatRange = {
  max: Scalars['Float']['input'];
  min: Scalars['Float']['input'];
};

export type GenerateMutationParams = {
  add?: InputMaybe<Scalars['Boolean']['input']>;
  delete?: InputMaybe<Scalars['Boolean']['input']>;
  update?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenerateQueryParams = {
  aggregate?: InputMaybe<Scalars['Boolean']['input']>;
  get?: InputMaybe<Scalars['Boolean']['input']>;
  password?: InputMaybe<Scalars['Boolean']['input']>;
  query?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum HttpMethod {
  Delete = 'DELETE',
  Get = 'GET',
  Patch = 'PATCH',
  Post = 'POST',
  Put = 'PUT'
}

export type Int64Filter = {
  between?: InputMaybe<Int64Range>;
  eq?: InputMaybe<Scalars['Int64']['input']>;
  ge?: InputMaybe<Scalars['Int64']['input']>;
  gt?: InputMaybe<Scalars['Int64']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int64']['input']>>>;
  le?: InputMaybe<Scalars['Int64']['input']>;
  lt?: InputMaybe<Scalars['Int64']['input']>;
};

export type Int64Range = {
  max: Scalars['Int64']['input'];
  min: Scalars['Int64']['input'];
};

export type IntFilter = {
  between?: InputMaybe<IntRange>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
};

export type IntRange = {
  max: Scalars['Int']['input'];
  min: Scalars['Int']['input'];
};

export type IntersectsFilter = {
  multiPolygon?: InputMaybe<MultiPolygonRef>;
  polygon?: InputMaybe<PolygonRef>;
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addComment?: Maybe<AddCommentPayload>;
  addOrganization?: Maybe<AddOrganizationPayload>;
  addPaymentAddress?: Maybe<AddPaymentAddressPayload>;
  addProblem?: Maybe<AddProblemPayload>;
  addRepository?: Maybe<AddRepositoryPayload>;
  addSolution?: Maybe<AddSolutionPayload>;
  addUser?: Maybe<AddUserPayload>;
  deleteComment?: Maybe<DeleteCommentPayload>;
  deleteOrganization?: Maybe<DeleteOrganizationPayload>;
  deletePaymentAddress?: Maybe<DeletePaymentAddressPayload>;
  deleteProblem?: Maybe<DeleteProblemPayload>;
  deleteRepository?: Maybe<DeleteRepositoryPayload>;
  deleteSolution?: Maybe<DeleteSolutionPayload>;
  deleteUser?: Maybe<DeleteUserPayload>;
  updateComment?: Maybe<UpdateCommentPayload>;
  updateOrganization?: Maybe<UpdateOrganizationPayload>;
  updatePaymentAddress?: Maybe<UpdatePaymentAddressPayload>;
  updateProblem?: Maybe<UpdateProblemPayload>;
  updateRepository?: Maybe<UpdateRepositoryPayload>;
  updateSolution?: Maybe<UpdateSolutionPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
};


export type MutationAddCommentArgs = {
  input: Array<AddCommentInput>;
};


export type MutationAddOrganizationArgs = {
  input: Array<AddOrganizationInput>;
};


export type MutationAddPaymentAddressArgs = {
  input: Array<AddPaymentAddressInput>;
};


export type MutationAddProblemArgs = {
  input: Array<AddProblemInput>;
};


export type MutationAddRepositoryArgs = {
  input: Array<AddRepositoryInput>;
};


export type MutationAddSolutionArgs = {
  input: Array<AddSolutionInput>;
};


export type MutationAddUserArgs = {
  input: Array<AddUserInput>;
};


export type MutationDeleteCommentArgs = {
  filter: CommentFilter;
};


export type MutationDeleteOrganizationArgs = {
  filter: OrganizationFilter;
};


export type MutationDeletePaymentAddressArgs = {
  filter: PaymentAddressFilter;
};


export type MutationDeleteProblemArgs = {
  filter: ProblemFilter;
};


export type MutationDeleteRepositoryArgs = {
  filter: RepositoryFilter;
};


export type MutationDeleteSolutionArgs = {
  filter: SolutionFilter;
};


export type MutationDeleteUserArgs = {
  filter: UserFilter;
};


export type MutationUpdateCommentArgs = {
  input: UpdateCommentInput;
};


export type MutationUpdateOrganizationArgs = {
  input: UpdateOrganizationInput;
};


export type MutationUpdatePaymentAddressArgs = {
  input: UpdatePaymentAddressInput;
};


export type MutationUpdateProblemArgs = {
  input: UpdateProblemInput;
};


export type MutationUpdateRepositoryArgs = {
  input: UpdateRepositoryInput;
};


export type MutationUpdateSolutionArgs = {
  input: UpdateSolutionInput;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type NearFilter = {
  coordinate: PointRef;
  distance: Scalars['Float']['input'];
};

export type Organization = {
  __typename?: 'Organization';
  OID: Scalars['ID']['output'];
  admins: Array<User>;
  adminsAggregate?: Maybe<UserAggregateResult>;
  contributors?: Maybe<Array<Maybe<User>>>;
  contributorsAggregate?: Maybe<UserAggregateResult>;
  createdBy: User;
  githubOrg?: Maybe<Scalars['String']['output']>;
  maintainers?: Maybe<Array<Maybe<User>>>;
  maintainersAggregate?: Maybe<UserAggregateResult>;
  name: Scalars['String']['output'];
  problems?: Maybe<Array<Maybe<Problem>>>;
  problemsAggregate?: Maybe<ProblemAggregateResult>;
};


export type OrganizationAdminsArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UserOrder>;
};


export type OrganizationAdminsAggregateArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type OrganizationContributorsArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UserOrder>;
};


export type OrganizationContributorsAggregateArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type OrganizationCreatedByArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type OrganizationMaintainersArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UserOrder>;
};


export type OrganizationMaintainersAggregateArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type OrganizationProblemsArgs = {
  filter?: InputMaybe<ProblemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ProblemOrder>;
};


export type OrganizationProblemsAggregateArgs = {
  filter?: InputMaybe<ProblemFilter>;
};

export type OrganizationAggregateResult = {
  __typename?: 'OrganizationAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  githubOrgMax?: Maybe<Scalars['String']['output']>;
  githubOrgMin?: Maybe<Scalars['String']['output']>;
  nameMax?: Maybe<Scalars['String']['output']>;
  nameMin?: Maybe<Scalars['String']['output']>;
};

export type OrganizationFilter = {
  OID?: InputMaybe<Array<Scalars['ID']['input']>>;
  and?: InputMaybe<Array<InputMaybe<OrganizationFilter>>>;
  has?: InputMaybe<Array<InputMaybe<OrganizationHasFilter>>>;
  name?: InputMaybe<StringHashFilter>;
  not?: InputMaybe<OrganizationFilter>;
  or?: InputMaybe<Array<InputMaybe<OrganizationFilter>>>;
};

export enum OrganizationHasFilter {
  Admins = 'admins',
  Contributors = 'contributors',
  CreatedBy = 'createdBy',
  GithubOrg = 'githubOrg',
  Maintainers = 'maintainers',
  Name = 'name',
  Problems = 'problems'
}

export type OrganizationOrder = {
  asc?: InputMaybe<OrganizationOrderable>;
  desc?: InputMaybe<OrganizationOrderable>;
  then?: InputMaybe<OrganizationOrder>;
};

export enum OrganizationOrderable {
  GithubOrg = 'githubOrg',
  Name = 'name'
}

export type OrganizationPatch = {
  admins?: InputMaybe<Array<UserRef>>;
  contributors?: InputMaybe<Array<InputMaybe<UserRef>>>;
  createdBy?: InputMaybe<UserRef>;
  githubOrg?: InputMaybe<Scalars['String']['input']>;
  maintainers?: InputMaybe<Array<InputMaybe<UserRef>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  problems?: InputMaybe<Array<InputMaybe<ProblemRef>>>;
};

export type OrganizationRef = {
  OID?: InputMaybe<Scalars['ID']['input']>;
  admins?: InputMaybe<Array<UserRef>>;
  contributors?: InputMaybe<Array<InputMaybe<UserRef>>>;
  createdBy?: InputMaybe<UserRef>;
  githubOrg?: InputMaybe<Scalars['String']['input']>;
  maintainers?: InputMaybe<Array<InputMaybe<UserRef>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  problems?: InputMaybe<Array<InputMaybe<ProblemRef>>>;
};

export type PaymentAddress = {
  __typename?: 'PaymentAddress';
  address: Scalars['String']['output'];
  network: Scalars['String']['output'];
};

export type PaymentAddressAggregateResult = {
  __typename?: 'PaymentAddressAggregateResult';
  addressMax?: Maybe<Scalars['String']['output']>;
  addressMin?: Maybe<Scalars['String']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  networkMax?: Maybe<Scalars['String']['output']>;
  networkMin?: Maybe<Scalars['String']['output']>;
};

export type PaymentAddressFilter = {
  and?: InputMaybe<Array<InputMaybe<PaymentAddressFilter>>>;
  has?: InputMaybe<Array<InputMaybe<PaymentAddressHasFilter>>>;
  not?: InputMaybe<PaymentAddressFilter>;
  or?: InputMaybe<Array<InputMaybe<PaymentAddressFilter>>>;
};

export enum PaymentAddressHasFilter {
  Address = 'address',
  Network = 'network'
}

export type PaymentAddressOrder = {
  asc?: InputMaybe<PaymentAddressOrderable>;
  desc?: InputMaybe<PaymentAddressOrderable>;
  then?: InputMaybe<PaymentAddressOrder>;
};

export enum PaymentAddressOrderable {
  Address = 'address',
  Network = 'network'
}

export type PaymentAddressPatch = {
  address?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
};

export type PaymentAddressRef = {
  address?: InputMaybe<Scalars['String']['input']>;
  network?: InputMaybe<Scalars['String']['input']>;
};

export type Point = {
  __typename?: 'Point';
  latitude: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type PointGeoFilter = {
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type PointListRef = {
  points: Array<PointRef>;
};

export type PointRef = {
  latitude: Scalars['Float']['input'];
  longitude: Scalars['Float']['input'];
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type PolygonGeoFilter = {
  contains?: InputMaybe<ContainsFilter>;
  intersects?: InputMaybe<IntersectsFilter>;
  near?: InputMaybe<NearFilter>;
  within?: InputMaybe<WithinFilter>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type Problem = {
  __typename?: 'Problem';
  OID: Scalars['ID']['output'];
  causedBy?: Maybe<Solution>;
  children?: Maybe<Array<Maybe<Problem>>>;
  childrenAggregate?: Maybe<ProblemAggregateResult>;
  claimedAt?: Maybe<Scalars['DateTime']['output']>;
  claimedBy?: Maybe<User>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  commentsAggregate?: Maybe<CommentAggregateResult>;
  created_at: Scalars['DateTime']['output'];
  creator: User;
  detailedDescription?: Maybe<Scalars['String']['output']>;
  maintainers?: Maybe<Array<Maybe<User>>>;
  maintainersAggregate?: Maybe<UserAggregateResult>;
  orgs?: Maybe<Array<Maybe<Organization>>>;
  orgsAggregate?: Maybe<OrganizationAggregateResult>;
  parents?: Maybe<Array<Maybe<Problem>>>;
  parentsAggregate?: Maybe<ProblemAggregateResult>;
  repository?: Maybe<Array<Maybe<Repository>>>;
  repositoryAggregate?: Maybe<RepositoryAggregateResult>;
  requiredSkills?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  shortDescription?: Maybe<Scalars['String']['output']>;
  solutions?: Maybe<Array<Maybe<Solution>>>;
  solutionsAggregate?: Maybe<SolutionAggregateResult>;
  status: ProblemStatus;
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};


export type ProblemCausedByArgs = {
  filter?: InputMaybe<SolutionFilter>;
};


export type ProblemChildrenArgs = {
  filter?: InputMaybe<ProblemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ProblemOrder>;
};


export type ProblemChildrenAggregateArgs = {
  filter?: InputMaybe<ProblemFilter>;
};


export type ProblemClaimedByArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type ProblemCommentsArgs = {
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CommentOrder>;
};


export type ProblemCommentsAggregateArgs = {
  filter?: InputMaybe<CommentFilter>;
};


export type ProblemCreatorArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type ProblemMaintainersArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UserOrder>;
};


export type ProblemMaintainersAggregateArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type ProblemOrgsArgs = {
  filter?: InputMaybe<OrganizationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrganizationOrder>;
};


export type ProblemOrgsAggregateArgs = {
  filter?: InputMaybe<OrganizationFilter>;
};


export type ProblemParentsArgs = {
  filter?: InputMaybe<ProblemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ProblemOrder>;
};


export type ProblemParentsAggregateArgs = {
  filter?: InputMaybe<ProblemFilter>;
};


export type ProblemRepositoryArgs = {
  filter?: InputMaybe<RepositoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<RepositoryOrder>;
};


export type ProblemRepositoryAggregateArgs = {
  filter?: InputMaybe<RepositoryFilter>;
};


export type ProblemSolutionsArgs = {
  filter?: InputMaybe<SolutionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SolutionOrder>;
};


export type ProblemSolutionsAggregateArgs = {
  filter?: InputMaybe<SolutionFilter>;
};

export type ProblemAggregateResult = {
  __typename?: 'ProblemAggregateResult';
  claimedAtMax?: Maybe<Scalars['DateTime']['output']>;
  claimedAtMin?: Maybe<Scalars['DateTime']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  created_atMax?: Maybe<Scalars['DateTime']['output']>;
  created_atMin?: Maybe<Scalars['DateTime']['output']>;
  detailedDescriptionMax?: Maybe<Scalars['String']['output']>;
  detailedDescriptionMin?: Maybe<Scalars['String']['output']>;
  shortDescriptionMax?: Maybe<Scalars['String']['output']>;
  shortDescriptionMin?: Maybe<Scalars['String']['output']>;
  titleMax?: Maybe<Scalars['String']['output']>;
  titleMin?: Maybe<Scalars['String']['output']>;
  updated_atMax?: Maybe<Scalars['DateTime']['output']>;
  updated_atMin?: Maybe<Scalars['DateTime']['output']>;
};

export type ProblemFilter = {
  OID?: InputMaybe<Array<Scalars['ID']['input']>>;
  and?: InputMaybe<Array<InputMaybe<ProblemFilter>>>;
  created_at?: InputMaybe<DateTimeFilter>;
  has?: InputMaybe<Array<InputMaybe<ProblemHasFilter>>>;
  not?: InputMaybe<ProblemFilter>;
  or?: InputMaybe<Array<InputMaybe<ProblemFilter>>>;
  requiredSkills?: InputMaybe<StringExactFilter>;
  shortDescription?: InputMaybe<StringFullTextFilter>;
  status?: InputMaybe<ProblemStatus_Hash>;
  title?: InputMaybe<StringFullTextFilter>;
  updated_at?: InputMaybe<DateTimeFilter>;
};

export enum ProblemHasFilter {
  CausedBy = 'causedBy',
  Children = 'children',
  ClaimedAt = 'claimedAt',
  ClaimedBy = 'claimedBy',
  Comments = 'comments',
  CreatedAt = 'created_at',
  Creator = 'creator',
  DetailedDescription = 'detailedDescription',
  Maintainers = 'maintainers',
  Orgs = 'orgs',
  Parents = 'parents',
  Repository = 'repository',
  RequiredSkills = 'requiredSkills',
  ShortDescription = 'shortDescription',
  Solutions = 'solutions',
  Status = 'status',
  Title = 'title',
  UpdatedAt = 'updated_at'
}

export type ProblemOrder = {
  asc?: InputMaybe<ProblemOrderable>;
  desc?: InputMaybe<ProblemOrderable>;
  then?: InputMaybe<ProblemOrder>;
};

export enum ProblemOrderable {
  ClaimedAt = 'claimedAt',
  CreatedAt = 'created_at',
  DetailedDescription = 'detailedDescription',
  ShortDescription = 'shortDescription',
  Title = 'title',
  UpdatedAt = 'updated_at'
}

export type ProblemPatch = {
  causedBy?: InputMaybe<SolutionRef>;
  children?: InputMaybe<Array<InputMaybe<ProblemRef>>>;
  claimedAt?: InputMaybe<Scalars['DateTime']['input']>;
  claimedBy?: InputMaybe<UserRef>;
  comments?: InputMaybe<Array<InputMaybe<CommentRef>>>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  creator?: InputMaybe<UserRef>;
  detailedDescription?: InputMaybe<Scalars['String']['input']>;
  maintainers?: InputMaybe<Array<InputMaybe<UserRef>>>;
  orgs?: InputMaybe<Array<InputMaybe<OrganizationRef>>>;
  parents?: InputMaybe<Array<InputMaybe<ProblemRef>>>;
  repository?: InputMaybe<Array<InputMaybe<RepositoryRef>>>;
  requiredSkills?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  solutions?: InputMaybe<Array<InputMaybe<SolutionRef>>>;
  status?: InputMaybe<ProblemStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProblemRef = {
  OID?: InputMaybe<Scalars['ID']['input']>;
  causedBy?: InputMaybe<SolutionRef>;
  children?: InputMaybe<Array<InputMaybe<ProblemRef>>>;
  claimedAt?: InputMaybe<Scalars['DateTime']['input']>;
  claimedBy?: InputMaybe<UserRef>;
  comments?: InputMaybe<Array<InputMaybe<CommentRef>>>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  creator?: InputMaybe<UserRef>;
  detailedDescription?: InputMaybe<Scalars['String']['input']>;
  maintainers?: InputMaybe<Array<InputMaybe<UserRef>>>;
  orgs?: InputMaybe<Array<InputMaybe<OrganizationRef>>>;
  parents?: InputMaybe<Array<InputMaybe<ProblemRef>>>;
  repository?: InputMaybe<Array<InputMaybe<RepositoryRef>>>;
  requiredSkills?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  shortDescription?: InputMaybe<Scalars['String']['input']>;
  solutions?: InputMaybe<Array<InputMaybe<SolutionRef>>>;
  status?: InputMaybe<ProblemStatus>;
  title?: InputMaybe<Scalars['String']['input']>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum ProblemStatus {
  Claimed = 'CLAIMED',
  Closed = 'CLOSED',
  Draft = 'DRAFT',
  Open = 'OPEN',
  Patched = 'PATCHED',
  Paused = 'PAUSED'
}

export type ProblemStatus_Hash = {
  eq?: InputMaybe<ProblemStatus>;
  in?: InputMaybe<Array<InputMaybe<ProblemStatus>>>;
};

export type Query = {
  __typename?: 'Query';
  aggregateComment?: Maybe<CommentAggregateResult>;
  aggregateOrganization?: Maybe<OrganizationAggregateResult>;
  aggregatePaymentAddress?: Maybe<PaymentAddressAggregateResult>;
  aggregateProblem?: Maybe<ProblemAggregateResult>;
  aggregateRepository?: Maybe<RepositoryAggregateResult>;
  aggregateSolution?: Maybe<SolutionAggregateResult>;
  aggregateUser?: Maybe<UserAggregateResult>;
  getComment?: Maybe<Comment>;
  getOrganization?: Maybe<Organization>;
  getProblem?: Maybe<Problem>;
  getSolution?: Maybe<Solution>;
  getUser?: Maybe<User>;
  queryComment?: Maybe<Array<Maybe<Comment>>>;
  queryOrganization?: Maybe<Array<Maybe<Organization>>>;
  queryPaymentAddress?: Maybe<Array<Maybe<PaymentAddress>>>;
  queryProblem?: Maybe<Array<Maybe<Problem>>>;
  queryRepository?: Maybe<Array<Maybe<Repository>>>;
  querySolution?: Maybe<Array<Maybe<Solution>>>;
  queryUser?: Maybe<Array<Maybe<User>>>;
};


export type QueryAggregateCommentArgs = {
  filter?: InputMaybe<CommentFilter>;
};


export type QueryAggregateOrganizationArgs = {
  filter?: InputMaybe<OrganizationFilter>;
};


export type QueryAggregatePaymentAddressArgs = {
  filter?: InputMaybe<PaymentAddressFilter>;
};


export type QueryAggregateProblemArgs = {
  filter?: InputMaybe<ProblemFilter>;
};


export type QueryAggregateRepositoryArgs = {
  filter?: InputMaybe<RepositoryFilter>;
};


export type QueryAggregateSolutionArgs = {
  filter?: InputMaybe<SolutionFilter>;
};


export type QueryAggregateUserArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type QueryGetCommentArgs = {
  OID: Scalars['ID']['input'];
};


export type QueryGetOrganizationArgs = {
  OID: Scalars['ID']['input'];
};


export type QueryGetProblemArgs = {
  OID: Scalars['ID']['input'];
};


export type QueryGetSolutionArgs = {
  OID: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  OID: Scalars['ID']['input'];
};


export type QueryQueryCommentArgs = {
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CommentOrder>;
};


export type QueryQueryOrganizationArgs = {
  filter?: InputMaybe<OrganizationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrganizationOrder>;
};


export type QueryQueryPaymentAddressArgs = {
  filter?: InputMaybe<PaymentAddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PaymentAddressOrder>;
};


export type QueryQueryProblemArgs = {
  filter?: InputMaybe<ProblemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ProblemOrder>;
};


export type QueryQueryRepositoryArgs = {
  filter?: InputMaybe<RepositoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<RepositoryOrder>;
};


export type QueryQuerySolutionArgs = {
  filter?: InputMaybe<SolutionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SolutionOrder>;
};


export type QueryQueryUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UserOrder>;
};

export type Repository = {
  __typename?: 'Repository';
  git?: Maybe<Scalars['String']['output']>;
  http: Scalars['String']['output'];
};

export type RepositoryAggregateResult = {
  __typename?: 'RepositoryAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  gitMax?: Maybe<Scalars['String']['output']>;
  gitMin?: Maybe<Scalars['String']['output']>;
  httpMax?: Maybe<Scalars['String']['output']>;
  httpMin?: Maybe<Scalars['String']['output']>;
};

export type RepositoryFilter = {
  and?: InputMaybe<Array<InputMaybe<RepositoryFilter>>>;
  has?: InputMaybe<Array<InputMaybe<RepositoryHasFilter>>>;
  not?: InputMaybe<RepositoryFilter>;
  or?: InputMaybe<Array<InputMaybe<RepositoryFilter>>>;
};

export enum RepositoryHasFilter {
  Git = 'git',
  Http = 'http'
}

export type RepositoryOrder = {
  asc?: InputMaybe<RepositoryOrderable>;
  desc?: InputMaybe<RepositoryOrderable>;
  then?: InputMaybe<RepositoryOrder>;
};

export enum RepositoryOrderable {
  Git = 'git',
  Http = 'http'
}

export type RepositoryPatch = {
  git?: InputMaybe<Scalars['String']['input']>;
  http?: InputMaybe<Scalars['String']['input']>;
};

export type RepositoryRef = {
  git?: InputMaybe<Scalars['String']['input']>;
  http?: InputMaybe<Scalars['String']['input']>;
};

export type Solution = {
  __typename?: 'Solution';
  OID: Scalars['ID']['output'];
  costUSD: Scalars['Int']['output'];
  created_at: Scalars['DateTime']['output'];
  creator: User;
  description?: Maybe<Scalars['String']['output']>;
  introducedProblems?: Maybe<Array<Maybe<Problem>>>;
  introducedProblemsAggregate?: Maybe<ProblemAggregateResult>;
  problem: Problem;
  updated_at: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
};


export type SolutionCreatorArgs = {
  filter?: InputMaybe<UserFilter>;
};


export type SolutionIntroducedProblemsArgs = {
  filter?: InputMaybe<ProblemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ProblemOrder>;
};


export type SolutionIntroducedProblemsAggregateArgs = {
  filter?: InputMaybe<ProblemFilter>;
};


export type SolutionProblemArgs = {
  filter?: InputMaybe<ProblemFilter>;
};

export type SolutionAggregateResult = {
  __typename?: 'SolutionAggregateResult';
  costUSDAvg?: Maybe<Scalars['Float']['output']>;
  costUSDMax?: Maybe<Scalars['Int']['output']>;
  costUSDMin?: Maybe<Scalars['Int']['output']>;
  costUSDSum?: Maybe<Scalars['Int']['output']>;
  count?: Maybe<Scalars['Int']['output']>;
  created_atMax?: Maybe<Scalars['DateTime']['output']>;
  created_atMin?: Maybe<Scalars['DateTime']['output']>;
  descriptionMax?: Maybe<Scalars['String']['output']>;
  descriptionMin?: Maybe<Scalars['String']['output']>;
  updated_atMax?: Maybe<Scalars['DateTime']['output']>;
  updated_atMin?: Maybe<Scalars['DateTime']['output']>;
  urlMax?: Maybe<Scalars['String']['output']>;
  urlMin?: Maybe<Scalars['String']['output']>;
};

export type SolutionFilter = {
  OID?: InputMaybe<Array<Scalars['ID']['input']>>;
  and?: InputMaybe<Array<InputMaybe<SolutionFilter>>>;
  costUSD?: InputMaybe<IntFilter>;
  created_at?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFullTextFilter>;
  has?: InputMaybe<Array<InputMaybe<SolutionHasFilter>>>;
  not?: InputMaybe<SolutionFilter>;
  or?: InputMaybe<Array<InputMaybe<SolutionFilter>>>;
  updated_at?: InputMaybe<DateTimeFilter>;
  url?: InputMaybe<StringExactFilter>;
};

export enum SolutionHasFilter {
  CostUsd = 'costUSD',
  CreatedAt = 'created_at',
  Creator = 'creator',
  Description = 'description',
  IntroducedProblems = 'introducedProblems',
  Problem = 'problem',
  UpdatedAt = 'updated_at',
  Url = 'url'
}

export type SolutionOrder = {
  asc?: InputMaybe<SolutionOrderable>;
  desc?: InputMaybe<SolutionOrderable>;
  then?: InputMaybe<SolutionOrder>;
};

export enum SolutionOrderable {
  CostUsd = 'costUSD',
  CreatedAt = 'created_at',
  Description = 'description',
  UpdatedAt = 'updated_at',
  Url = 'url'
}

export type SolutionPatch = {
  costUSD?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  creator?: InputMaybe<UserRef>;
  description?: InputMaybe<Scalars['String']['input']>;
  introducedProblems?: InputMaybe<Array<InputMaybe<ProblemRef>>>;
  problem?: InputMaybe<ProblemRef>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type SolutionRef = {
  OID?: InputMaybe<Scalars['ID']['input']>;
  costUSD?: InputMaybe<Scalars['Int']['input']>;
  created_at?: InputMaybe<Scalars['DateTime']['input']>;
  creator?: InputMaybe<UserRef>;
  description?: InputMaybe<Scalars['String']['input']>;
  introducedProblems?: InputMaybe<Array<InputMaybe<ProblemRef>>>;
  problem?: InputMaybe<ProblemRef>;
  updated_at?: InputMaybe<Scalars['DateTime']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type StringExactFilter = {
  between?: InputMaybe<StringRange>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
};

export type StringFullTextFilter = {
  alloftext?: InputMaybe<Scalars['String']['input']>;
  anyoftext?: InputMaybe<Scalars['String']['input']>;
};

export type StringHashFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type StringRange = {
  max: Scalars['String']['input'];
  min: Scalars['String']['input'];
};

export type StringRegExpFilter = {
  regexp?: InputMaybe<Scalars['String']['input']>;
};

export type StringTermFilter = {
  allofterms?: InputMaybe<Scalars['String']['input']>;
  anyofterms?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCommentInput = {
  filter: CommentFilter;
  remove?: InputMaybe<CommentPatch>;
  set?: InputMaybe<CommentPatch>;
};

export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload';
  comment?: Maybe<Array<Maybe<Comment>>>;
  numUids?: Maybe<Scalars['Int']['output']>;
};


export type UpdateCommentPayloadCommentArgs = {
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CommentOrder>;
};

export type UpdateOrganizationInput = {
  filter: OrganizationFilter;
  remove?: InputMaybe<OrganizationPatch>;
  set?: InputMaybe<OrganizationPatch>;
};

export type UpdateOrganizationPayload = {
  __typename?: 'UpdateOrganizationPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  organization?: Maybe<Array<Maybe<Organization>>>;
};


export type UpdateOrganizationPayloadOrganizationArgs = {
  filter?: InputMaybe<OrganizationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrganizationOrder>;
};

export type UpdatePaymentAddressInput = {
  filter: PaymentAddressFilter;
  remove?: InputMaybe<PaymentAddressPatch>;
  set?: InputMaybe<PaymentAddressPatch>;
};

export type UpdatePaymentAddressPayload = {
  __typename?: 'UpdatePaymentAddressPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  paymentAddress?: Maybe<Array<Maybe<PaymentAddress>>>;
};


export type UpdatePaymentAddressPayloadPaymentAddressArgs = {
  filter?: InputMaybe<PaymentAddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PaymentAddressOrder>;
};

export type UpdateProblemInput = {
  filter: ProblemFilter;
  remove?: InputMaybe<ProblemPatch>;
  set?: InputMaybe<ProblemPatch>;
};

export type UpdateProblemPayload = {
  __typename?: 'UpdateProblemPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  problem?: Maybe<Array<Maybe<Problem>>>;
};


export type UpdateProblemPayloadProblemArgs = {
  filter?: InputMaybe<ProblemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ProblemOrder>;
};

export type UpdateRepositoryInput = {
  filter: RepositoryFilter;
  remove?: InputMaybe<RepositoryPatch>;
  set?: InputMaybe<RepositoryPatch>;
};

export type UpdateRepositoryPayload = {
  __typename?: 'UpdateRepositoryPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  repository?: Maybe<Array<Maybe<Repository>>>;
};


export type UpdateRepositoryPayloadRepositoryArgs = {
  filter?: InputMaybe<RepositoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<RepositoryOrder>;
};

export type UpdateSolutionInput = {
  filter: SolutionFilter;
  remove?: InputMaybe<SolutionPatch>;
  set?: InputMaybe<SolutionPatch>;
};

export type UpdateSolutionPayload = {
  __typename?: 'UpdateSolutionPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  solution?: Maybe<Array<Maybe<Solution>>>;
};


export type UpdateSolutionPayloadSolutionArgs = {
  filter?: InputMaybe<SolutionFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<SolutionOrder>;
};

export type UpdateUserInput = {
  filter: UserFilter;
  remove?: InputMaybe<UserPatch>;
  set?: InputMaybe<UserPatch>;
};

export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload';
  numUids?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Array<Maybe<User>>>;
};


export type UpdateUserPayloadUserArgs = {
  filter?: InputMaybe<UserFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<UserOrder>;
};

export type User = {
  __typename?: 'User';
  OID: Scalars['ID']['output'];
  actionHistory?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  administeredOrgs?: Maybe<Array<Maybe<Organization>>>;
  administeredOrgsAggregate?: Maybe<OrganizationAggregateResult>;
  authoredProblems?: Maybe<Array<Maybe<Problem>>>;
  authoredProblemsAggregate?: Maybe<ProblemAggregateResult>;
  claimed?: Maybe<Array<Maybe<Problem>>>;
  claimedAggregate?: Maybe<ProblemAggregateResult>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  commentsAggregate?: Maybe<CommentAggregateResult>;
  email?: Maybe<Scalars['String']['output']>;
  github: Scalars['String']['output'];
  maintainedOrgs?: Maybe<Array<Maybe<Organization>>>;
  maintainedOrgsAggregate?: Maybe<OrganizationAggregateResult>;
  name: Scalars['String']['output'];
  paymentAddresses?: Maybe<Array<Maybe<PaymentAddress>>>;
  paymentAddressesAggregate?: Maybe<PaymentAddressAggregateResult>;
  rate?: Maybe<Scalars['Int']['output']>;
  sponsoredBy?: Maybe<User>;
  telegram?: Maybe<Scalars['String']['output']>;
};


export type UserAdministeredOrgsArgs = {
  filter?: InputMaybe<OrganizationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrganizationOrder>;
};


export type UserAdministeredOrgsAggregateArgs = {
  filter?: InputMaybe<OrganizationFilter>;
};


export type UserAuthoredProblemsArgs = {
  filter?: InputMaybe<ProblemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ProblemOrder>;
};


export type UserAuthoredProblemsAggregateArgs = {
  filter?: InputMaybe<ProblemFilter>;
};


export type UserClaimedArgs = {
  filter?: InputMaybe<ProblemFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<ProblemOrder>;
};


export type UserClaimedAggregateArgs = {
  filter?: InputMaybe<ProblemFilter>;
};


export type UserCommentsArgs = {
  filter?: InputMaybe<CommentFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<CommentOrder>;
};


export type UserCommentsAggregateArgs = {
  filter?: InputMaybe<CommentFilter>;
};


export type UserMaintainedOrgsArgs = {
  filter?: InputMaybe<OrganizationFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<OrganizationOrder>;
};


export type UserMaintainedOrgsAggregateArgs = {
  filter?: InputMaybe<OrganizationFilter>;
};


export type UserPaymentAddressesArgs = {
  filter?: InputMaybe<PaymentAddressFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<PaymentAddressOrder>;
};


export type UserPaymentAddressesAggregateArgs = {
  filter?: InputMaybe<PaymentAddressFilter>;
};


export type UserSponsoredByArgs = {
  filter?: InputMaybe<UserFilter>;
};

export type UserAggregateResult = {
  __typename?: 'UserAggregateResult';
  count?: Maybe<Scalars['Int']['output']>;
  emailMax?: Maybe<Scalars['String']['output']>;
  emailMin?: Maybe<Scalars['String']['output']>;
  githubMax?: Maybe<Scalars['String']['output']>;
  githubMin?: Maybe<Scalars['String']['output']>;
  nameMax?: Maybe<Scalars['String']['output']>;
  nameMin?: Maybe<Scalars['String']['output']>;
  rateAvg?: Maybe<Scalars['Float']['output']>;
  rateMax?: Maybe<Scalars['Int']['output']>;
  rateMin?: Maybe<Scalars['Int']['output']>;
  rateSum?: Maybe<Scalars['Int']['output']>;
  telegramMax?: Maybe<Scalars['String']['output']>;
  telegramMin?: Maybe<Scalars['String']['output']>;
};

export type UserFilter = {
  OID?: InputMaybe<Array<Scalars['ID']['input']>>;
  and?: InputMaybe<Array<InputMaybe<UserFilter>>>;
  github?: InputMaybe<StringExactFilter>;
  has?: InputMaybe<Array<InputMaybe<UserHasFilter>>>;
  name?: InputMaybe<StringHashFilter>;
  not?: InputMaybe<UserFilter>;
  or?: InputMaybe<Array<InputMaybe<UserFilter>>>;
};

export enum UserHasFilter {
  ActionHistory = 'actionHistory',
  AdministeredOrgs = 'administeredOrgs',
  AuthoredProblems = 'authoredProblems',
  Claimed = 'claimed',
  Comments = 'comments',
  Email = 'email',
  Github = 'github',
  MaintainedOrgs = 'maintainedOrgs',
  Name = 'name',
  PaymentAddresses = 'paymentAddresses',
  Rate = 'rate',
  SponsoredBy = 'sponsoredBy',
  Telegram = 'telegram'
}

export type UserOrder = {
  asc?: InputMaybe<UserOrderable>;
  desc?: InputMaybe<UserOrderable>;
  then?: InputMaybe<UserOrder>;
};

export enum UserOrderable {
  Email = 'email',
  Github = 'github',
  Name = 'name',
  Rate = 'rate',
  Telegram = 'telegram'
}

export type UserPatch = {
  actionHistory?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  administeredOrgs?: InputMaybe<Array<InputMaybe<OrganizationRef>>>;
  authoredProblems?: InputMaybe<Array<InputMaybe<ProblemRef>>>;
  claimed?: InputMaybe<Array<InputMaybe<ProblemRef>>>;
  comments?: InputMaybe<Array<InputMaybe<CommentRef>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  maintainedOrgs?: InputMaybe<Array<InputMaybe<OrganizationRef>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  paymentAddresses?: InputMaybe<Array<InputMaybe<PaymentAddressRef>>>;
  rate?: InputMaybe<Scalars['Int']['input']>;
  sponsoredBy?: InputMaybe<UserRef>;
  telegram?: InputMaybe<Scalars['String']['input']>;
};

export type UserRef = {
  OID?: InputMaybe<Scalars['ID']['input']>;
  actionHistory?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  administeredOrgs?: InputMaybe<Array<InputMaybe<OrganizationRef>>>;
  authoredProblems?: InputMaybe<Array<InputMaybe<ProblemRef>>>;
  claimed?: InputMaybe<Array<InputMaybe<ProblemRef>>>;
  comments?: InputMaybe<Array<InputMaybe<CommentRef>>>;
  email?: InputMaybe<Scalars['String']['input']>;
  github?: InputMaybe<Scalars['String']['input']>;
  maintainedOrgs?: InputMaybe<Array<InputMaybe<OrganizationRef>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  paymentAddresses?: InputMaybe<Array<InputMaybe<PaymentAddressRef>>>;
  rate?: InputMaybe<Scalars['Int']['input']>;
  sponsoredBy?: InputMaybe<UserRef>;
  telegram?: InputMaybe<Scalars['String']['input']>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};
