import type { Post } from '../backend';
import { UpdateCategory, type UpdateItem } from '../content/updateTypes';

/**
 * Map backend Post union type to frontend UpdateItem
 */
export function adaptBackendPost(post: Post): UpdateItem {
  // Extract the inner PostType from the union
  let postData;
  let category: UpdateCategory;

  switch (post.__kind__) {
    case 'scholarship':
      postData = post.scholarship;
      category = UpdateCategory.SCHOLARSHIPS;
      break;
    case 'examNotification':
      postData = post.examNotification;
      category = UpdateCategory.COMPETITIVE_EXAMS;
      break;
    case 'result':
      postData = post.result;
      category = UpdateCategory.RESULTS;
      break;
    case 'admitCard':
      postData = post.admitCard;
      category = UpdateCategory.ADMIT_CARDS;
      break;
    case 'educationNews':
      postData = post.educationNews;
      category = UpdateCategory.EDUCATION_NEWS;
      break;
    case 'stateScheme':
      postData = post.stateScheme;
      category = UpdateCategory.SCHEMES;
      break;
    case 'generalInfo':
    default:
      postData = post.generalInfo;
      category = UpdateCategory.EDUCATION_NEWS;
      break;
  }

  // Convert lastUpdatedAt (bigint timestamp in nanoseconds) to ISO date string
  const dateMs = Number(postData.lastUpdatedAt) / 1_000_000;
  const date = dateMs > 0 ? new Date(dateMs).toISOString().split('T')[0] : new Date().toISOString().split('T')[0];

  return {
    id: postData.id,
    title: postData.title,
    category,
    date,
    excerpt: postData.excerpt,
    body: postData.body,
    stateTags: postData.stateTags,
    imageUrl: postData.imageUrl || undefined,
  };
}

/**
 * Adapt an array of backend posts
 */
export function adaptBackendPosts(posts: Post[]): UpdateItem[] {
  return posts.map(adaptBackendPost);
}
