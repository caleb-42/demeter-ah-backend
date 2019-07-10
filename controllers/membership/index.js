import db from '../../db/models';
import { getMembers } from '../../utils';

export default {
  createFollowing: async (req, res) => {
    const { id } = req.user;
    const { followId } = req.body;
    const followerId = id;

    if (followId === id) {
      return res.status(400).send({
        error: 'you can\'t follow yourself'
      });
    }

    const userExist = await db.User.findOne({
      where: { id: followId }
    });

    if (!userExist) {
      return res.status(404).send({
        error: 'user not found'
      });
    }
    const following = await db.MemberShip.findOne({
      where: {
        followerId,
        followId
      }
    });
    if (following) {
      // unfollow user
      await following.destroy();
      return res.status(200).send({
        message: 'unfollow successful'
      });
    }
    const result = await db.MemberShip.create({
      followerId,
      followId
    });
    return res.status(200).send({
      user: result
    });
  },

  getFollowing: async (req, res) => {
    const { id } = req.user;

    const user = await getMembers('following', 'followed', id);

    return res.status(200).send({
      user,
    });
  },

  getFollowers: async (req, res) => {
    const { id } = req.user;

    const user = await getMembers('followers', 'follower', id);
    return res.status(200).send({
      user,
    });
  }
};