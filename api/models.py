from typing import Optional
from sqlalchemy import String
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import DeclarativeBase

class Base(DeclarativeBase):
    pass
# class Filme(Base):
#     __tablename__ = "filme"

#     id: Mapped[int] = mapped_column(primary_key=True)
#     titulo: Mapped[str] = mapped_column(String(100))


#     def as_dict(self):
#         return {
#             'id': self.id,
#             'titulo': self.titulo,
#         }

