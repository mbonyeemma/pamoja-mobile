import theme from '../../constants/theme';

export default {
  nameContainer: {
    fontSize: theme.fonts.base,
    fontFamily: theme.fonts.regular,
    color: theme.colors.lighterBlack
  },
  profilePictureContainer: {
    width: 60,
    height: 75,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  profilePicture: {
    borderRadius: 20
  },
  profileImage: {
    width: 55,
    height: 55
  },
  removeIconButton: {
    position: 'absolute',
    right: 3,
    bottom: -5
  },
  labelText: {
    fontSize: theme.fonts.base,
    fontFamily: theme.fonts.regular,
    color: theme.colors.darkerGray
  }
};
